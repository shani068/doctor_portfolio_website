import type { ContactFormValues } from "@/lib/contact-form-validation"

export type ContactApiFieldError = {
  path: string
  message: string
}

export type ContactApiError = Error & {
  status: number
  errors?: ContactApiFieldError[]
}

export type ContactInquirySuccess = {
  statusCode: number
  message: string
  data: {
    id: string
    status: string
    createdAt: string
  }
  success: true
}

function getContactApiUrl(): string {
  const url = import.meta.env.VITE_CONTACT_API_URL ?? ""
  return url.trim()
}

export function isContactApiConfigured(): boolean {
  return Boolean(getContactApiUrl())
}

function messageForStatus(status: number, fallback?: string): string {
  if (status === 413) return "Message too long. Please shorten your message and try again."
  if (status === 429) return "Too many requests. Please try again later."
  if (status >= 500) return "Something went wrong. Please try again later."
  return fallback || "Failed to send message. Please try again."
}

export async function submitContactInquiry(
  values: ContactFormValues
): Promise<ContactInquirySuccess> {
  const apiUrl = getContactApiUrl()
  if (!apiUrl) {
    throw Object.assign(new Error("Contact form is not configured. Missing VITE_CONTACT_API_URL."), {
      status: 0,
    }) as ContactApiError
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      website: "", // honeypot — always empty for real users
    }),
  })

  const body = await res.json().catch(() => ({}))

  if (!res.ok) {
    const message = messageForStatus(res.status, body?.message)
    throw Object.assign(new Error(message), {
      status: res.status,
      errors: body?.errors,
    }) as ContactApiError
  }

  return body as ContactInquirySuccess
}
