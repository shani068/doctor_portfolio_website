
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-blue-700 hover:bg-primary/20">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Consultant Psychiatrist–Led Adult ADHD Care
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer comprehensive, evidence-based assessment and management for Adult ADHD, led exclusively by a Consultant Psychiatrist with over 8 years of experience in diagnosing and treating complex mental health conditions. Our service is discreet, professional, and tailored to adults seeking clarity, structure, and support.
            </p>

            {/* Key points - from PDF Why Choose Us */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Specialist-led care</h3>
                  <p className="text-sm text-muted-foreground">Your full journey—from assessment to treatment—is overseen by a Consultant Psychiatrist, ensuring the highest standard of clinical expertise.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">No waiting lists</h3>
                  <p className="text-sm text-muted-foreground">Quick access to appointments, so you don’t have to wait months for answers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Personalized plans</h3>
                  <p className="text-sm text-muted-foreground">ADHD presents differently in adults. Each assessment is uniquely tailored, accounting for co-existing conditions such as anxiety, depression, or emotional dysregulation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Evidence-based treatment</h3>
                  <p className="text-sm text-muted-foreground">Medication, coaching, lifestyle modification, and psychological strategies—all supported by clinical research.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Discreet and professional</h3>
                  <p className="text-sm text-muted-foreground">Strict confidentiality and compassionate, stigma-free care.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <Card className="overflow-hidden border-border p-0">
              <div className="aspect-square bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                    <span className="text-5xl font-bold text-blue-700">DS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dr. Desh Sidhu</h3>
                    <p className="text-muted-foreground">Psychiatrist & ADHD Specialist</p>
                    <p className="text-sm text-blue-700 font-semibold mt-1">8+ Years Experience</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <Card className="absolute -bottom-4 -right-4 bg-blue-700 text-white border-0 p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <p className="text-xs">Years of Excellence</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
