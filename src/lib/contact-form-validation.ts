import { z } from "zod"

/** Visible form fields + honeypot — matches ContactInquiry create API. */
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(100, "Full name must be at most 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(254, "Email must be at most 254 characters."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be at most 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
  /** Honeypot — always submitted as "" for real users. */
  website: z.string(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const contactFormDefaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
  website: "",
}
