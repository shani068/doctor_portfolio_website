
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
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Meet Dr. Dash Sidhu</Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Adult ADHD & Psychiatry Expert
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Dash Sidhu is a specialized psychiatrist with 15+ years of dedicated expertise in Adult ADHD diagnosis, 
              treatment, and behavioral management. Committed to providing evidence-based, compassionate care, Dr. Sidhu 
              combines clinical excellence with a holistic approach to mental health.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep experience in medication management, family-centered care, and behavioral coaching, Dr. Sidhu 
              treats patients of all ages. Our practice emphasizes personalized treatment plans that adapt to each patient's 
              unique needs, delivered through flexible appointment options including virtual, home visits, and in-clinic sessions.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">ADHD & Psychiatry Specialist</h3>
                  <p className="text-sm text-muted-foreground">Expert diagnosis and evidence-based treatment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Comprehensive Treatment Modalities</h3>
                  <p className="text-sm text-muted-foreground">Assessment, medication, family therapy, coaching</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">All Ages Welcome</h3>
                  <p className="text-sm text-muted-foreground">Children, adolescents, and adults</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Patient-Centered, Evidence-Based Care</h3>
                  <p className="text-sm text-muted-foreground">Personalized plans with proven outcomes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <Card className="overflow-hidden border-border p-0">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                    <span className="text-5xl font-bold text-primary">DS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dr. Dash Sidhu</h3>
                    <p className="text-muted-foreground">Psychiatrist & ADHD Specialist</p>
                    <p className="text-sm text-primary font-semibold mt-1">15+ Years Experience</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <Card className="absolute -bottom-4 -right-4 bg-primary text-white border-0 p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <p className="text-xs">Years of Excellence</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
