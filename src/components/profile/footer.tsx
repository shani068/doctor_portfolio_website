
import { Button } from '@/components/ui/button'
import { Mail, Facebook, Twitter, Linkedin, Stethoscope } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main footer content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white font-bold text-lg">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Dr. Desh Sidhu</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Private Adult Psychiatric &amp; ADHD Assessment Services. Clinician – Researcher – Consultant.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li> */}
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@drdeshsidhu.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@drdeshsidhu.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Please include a brief summary of your reason for assessment and preferred availability. Pre‑assessment
                screening will be sent following initial enquiry.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dr. Desh Sidhu. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-blue-700 hover:text-blue-700 cursor-pointer hover:border-blue-700 bg-transparent"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-blue-700 hover:text-blue-700 cursor-pointer hover:border-blue-700 bg-transparent"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-blue-700 hover:text-blue-700 cursor-pointer hover:border-blue-700 bg-transparent"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
