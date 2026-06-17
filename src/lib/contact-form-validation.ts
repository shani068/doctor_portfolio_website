export type ContactField = "user_name" | "user_email" | "subject" | "message"

export type ContactFormValues = Record<ContactField, string>

export type ContactFormErrors = Partial<Record<ContactField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getFormValues(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form)
  return {
    user_name: String(data.get("user_name") ?? "").trim(),
    user_email: String(data.get("user_email") ?? "").trim(),
    subject: String(data.get("subject") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  }
}

/** Client-side validation before calling EmailJS. Prevents empty or invalid submissions. */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.user_name) {
    errors.user_name = "Full name is required."
  } else if (values.user_name.length < 2) {
    errors.user_name = "Please enter at least 2 characters."
  }

  if (!values.user_email) {
    errors.user_email = "Email is required."
  } else if (!EMAIL_PATTERN.test(values.user_email)) {
    errors.user_email = "Please enter a valid email address."
  }

  if (!values.subject) {
    errors.subject = "Subject is required."
  } else if (values.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters."
  }

  if (!values.message) {
    errors.message = "Message is required."
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters."
  }

  return errors
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
