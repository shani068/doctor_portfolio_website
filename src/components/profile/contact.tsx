import ContactForm from "@/components/contact/ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send a message and we will respond as soon as possible. For urgent clinical matters,
            please use the contact details in the footer.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
