import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2, Mail, MessageSquare, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  isContactApiConfigured,
  submitContactInquiry,
  type ContactApiError,
} from "@/lib/contact-api"
import {
  contactFormDefaultValues,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form-validation"

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
  })

  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (values: ContactFormValues) => {
    if (!isContactApiConfigured()) {
      toast.error("Contact form is not configured.", {
        description: "Missing VITE_CONTACT_API_URL.",
      })
      return
    }

    try {
      await submitContactInquiry({ ...values, website: "" })
      form.reset(contactFormDefaultValues)
      toast.success("Message sent successfully!", {
        description: "We will get back to you as soon as possible.",
      })
    } catch (error) {
      const apiError = error as ContactApiError
      console.error("Contact inquiry failed:", apiError)

      if (apiError.status === 400 && Array.isArray(apiError.errors)) {
        for (const fieldError of apiError.errors) {
          const path = fieldError.path as keyof ContactFormValues
          if (path in contactFormDefaultValues && path !== "website") {
            form.setError(path, { message: fieldError.message })
          }
        }
        toast.error("Please fix the highlighted fields before sending.")
        return
      }

      toast.error(apiError.message || "Unable to send your message.", {
        description:
          apiError.status === 429
            ? undefined
            : "Please try again later or use the contact details in the footer.",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="relative mx-auto max-w-2xl space-y-6"
        aria-busy={isSubmitting}
      >
        {/* Honeypot — invisible to humans; bots that fill it get a fake success */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            >
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  disabled={isSubmitting}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-700" aria-hidden />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:col-span-1">
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-700" aria-hidden />
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Enquiry about a private consultation"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-700" aria-hidden />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
  )
}
