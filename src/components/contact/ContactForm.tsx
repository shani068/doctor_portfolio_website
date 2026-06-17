import { useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { Loader2, Mail, MessageSquare, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getEmailJsConfig } from "@/lib/emailjs-config"
import {
  getFormValues,
  hasValidationErrors,
  validateContactForm,
  type ContactField,
  type ContactFormErrors,
} from "@/lib/contact-form-validation"

const FIELD_LABELS: Record<ContactField, string> = {
  user_name: "Full Name",
  user_email: "Email",
  subject: "Subject",
  message: "Message",
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const clearFieldError = (field: ContactField) => {
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = formRef.current
    if (!form) return

    const values = getFormValues(form)
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)

    if (hasValidationErrors(validationErrors)) {
      toast.error("Please fix the highlighted fields before sending.")
      return
    }

    const config = getEmailJsConfig()
    if (!config.isConfigured) {
      toast.error("Contact form is not configured. Missing environment variables.", {
        description: config.missingKeys.join(", "),
      })
      return
    }

    setIsSubmitting(true)

    try {
      // sendForm reads input `name` attributes — must match EmailJS template variables
      await emailjs.sendForm(
        config.serviceId,
        config.templateId,
        form,
        { publicKey: config.publicKey }
      )

      form.reset()
      setErrors({})
      toast.success("Message sent successfully!", {
        description: "We will get back to you as soon as possible.",
      })
    } catch (error) {
      console.error("EmailJS send failed:", error)
      toast.error("Unable to send your message.", {
        description: "Please try again later or email us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldError = (field: ContactField) => errors[field]

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-2xl space-y-6"
      aria-busy={isSubmitting}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name — template variable: user_name */}
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="user_name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-700" aria-hidden />
            {FIELD_LABELS.user_name}
          </Label>
          <Input
            id="user_name"
            name="user_name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldError("user_name"))}
            aria-describedby={fieldError("user_name") ? "user_name-error" : undefined}
            onChange={() => clearFieldError("user_name")}
            className={fieldError("user_name") ? "border-destructive" : undefined}
          />
          {fieldError("user_name") && (
            <p id="user_name-error" className="text-sm text-destructive" role="alert">
              {fieldError("user_name")}
            </p>
          )}
        </div>

        {/* Email — template variable: user_email */}
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="user_email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-700" aria-hidden />
            {FIELD_LABELS.user_email}
          </Label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldError("user_email"))}
            aria-describedby={fieldError("user_email") ? "user_email-error" : undefined}
            onChange={() => clearFieldError("user_email")}
            className={fieldError("user_email") ? "border-destructive" : undefined}
          />
          {fieldError("user_email") && (
            <p id="user_email-error" className="text-sm text-destructive" role="alert">
              {fieldError("user_email")}
            </p>
          )}
        </div>
      </div>

      {/* Subject — template variable: subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">{FIELD_LABELS.subject}</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Enquiry about ADHD assessment"
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldError("subject"))}
          aria-describedby={fieldError("subject") ? "subject-error" : undefined}
          onChange={() => clearFieldError("subject")}
          className={fieldError("subject") ? "border-destructive" : undefined}
        />
        {fieldError("subject") && (
          <p id="subject-error" className="text-sm text-destructive" role="alert">
            {fieldError("subject")}
          </p>
        )}
      </div>

      {/* Message — template variable: message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-blue-700" aria-hidden />
          {FIELD_LABELS.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help you?"
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={fieldError("message") ? "message-error" : undefined}
          onChange={() => clearFieldError("message")}
          className={fieldError("message") ? "border-destructive" : undefined}
        />
        {fieldError("message") && (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {fieldError("message")}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white sm:w-auto sm:min-w-[200px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
