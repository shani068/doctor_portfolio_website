/**
 * EmailJS credentials from Vite environment variables.
 * Never hardcode keys in components — use .env locally and your host's env UI in production.
 */
export type EmailJsConfig = {
  serviceId: string
  templateId: string
  publicKey: string
  isConfigured: boolean
  missingKeys: string[]
}

export function getEmailJsConfig(): EmailJsConfig {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ""
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ""
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ""

  const missingKeys: string[] = []
  if (!serviceId.trim()) missingKeys.push("VITE_EMAILJS_SERVICE_ID")
  if (!templateId.trim()) missingKeys.push("VITE_EMAILJS_TEMPLATE_ID")
  if (!publicKey.trim()) missingKeys.push("VITE_EMAILJS_PUBLIC_KEY")

  return {
    serviceId,
    templateId,
    publicKey,
    isConfigured: missingKeys.length === 0,
    missingKeys,
  }
}
