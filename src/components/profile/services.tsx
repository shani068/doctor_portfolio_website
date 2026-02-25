import { Card } from '@/components/ui/card'
import {
  ClipboardList,
  Video,
  FileCheck,
  Pill,
  Lightbulb,
  Heart,
  Video as VideoIcon,
  Home,
  Activity,
} from 'lucide-react'

// PDF: Our 3-Step ADHD Assessment Process (only 3 steps; Ongoing Care is separate below)
const assessmentSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: 'Pre-Assessment Screening – €300',
    description:
      'You’ll complete a set of validated questionnaires to explore attention, hyperactivity, executive functioning, and emotional regulation. If ADHD is likely, we’ll proceed to full diagnostic assessment.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: 2,
    icon: Video,
    title: 'Comprehensive Psychiatric Assessment – €500',
    description:
      'A 90-minute video consultation with the Consultant Psychiatrist, including: full psychiatric history, symptom exploration using DSM-5 criteria, exploration of co-existing mental health issues, and functional impact at work, relationships, and home.',
    color: 'from-cyan-500 to-blue-600',
    featured: true,
  },
  {
    step: 3,
    icon: FileCheck,
    title: 'Diagnosis & Treatment Planning – €400',
    description:
      'Same-day diagnosis, if appropriate. Personalized treatment plan including: medication options (e.g. stimulants, non-stimulants), psychoeducation, ADHD coaching, and support for co-existing conditions (e.g. anxiety, depression).',
    color: 'from-teal-500 to-cyan-600',
  },
]

const treatmentModalities = [
  {
    icon: Pill,
    title: 'Medication',
    description: 'Stimulant and non-stimulant options, titrated and monitored by your Consultant Psychiatrist.',
  },
  {
    icon: Lightbulb,
    title: 'ADHD Coaching & Psychoeducation',
    description: 'Strategies for structure, organization, and emotional regulation.',
  },
  {
    icon: Activity,
    title: 'Lifestyle & Psychological Strategies',
    description: 'Evidence-based approaches supported by clinical research.',
  },
]

const deliveryOptions = [
  {
    icon: VideoIcon,
    title: 'Video Consultations',
    description: '90-minute and follow-up appointments from home',
  },
  {
    icon: Home,
    title: 'Discreet & Professional',
    description: 'Strict confidentiality, stigma-free care',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - PDF: Our 3-Step ADHD Assessment Process */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-blue-700">ADULT ADHD ASSESSMENT</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Our 3-Step ADHD Assessment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A clear, structured pathway from screening to diagnosis and treatment—all led by a Consultant Psychiatrist. If you suspect you may have ADHD, effective help is available.
          </p>
        </div>

        {/* 3-Step Process only - from PDF */}
        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {assessmentSteps.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-8 ${item.featured ? 'border-2 border-primary' : ''}`}
              >
                <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-linear-to-br ${item.color}`} />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white font-bold text-sm">
                      {item.step}
                    </span> */}
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    {item.step === 2 ? (
                      <>
                        <p className="text-base text-muted-foreground leading-relaxed mb-2">
                          A 90-minute video consultation with the Consultant Psychiatrist, including:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground">
                          <li>Full psychiatric history</li>
                          <li>Symptom exploration using DSM-5 criteria</li>
                          <li>Exploration of co-existing mental health issues</li>
                          <li>Functional impact at work, relationships, and home</li>
                        </ul>
                      </>
                    ) : item.step === 3 ? (
                      <>
                        <p className="text-base text-muted-foreground leading-relaxed mb-2">
                          Same-day diagnosis, if appropriate. Personalized treatment plan including:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground">
                          <li>Medication options (e.g. stimulants, non-stimulants)</li>
                          <li>Psychoeducation</li>
                          <li>ADHD coaching</li>
                          <li>Support for co-existing conditions (e.g. anxiety, depression)</li>
                        </ul>
                      </>
                    ) : (
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className={`h-1 w-12 bg-linear-to-r ${item.color} rounded-full`} />
                </div>
              </Card>
            )
          })}
        </div>

        {/* PDF: Ongoing Care & Medication Titration - €200 (separate from the 3 steps) */}
        <Card className="mb-16 border-primary/30 bg-primary/5 p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-teal-600 text-white shadow-lg">
              <Heart className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Ongoing Care & Medication Titration – €200</h3>
              <p className="text-muted-foreground mb-3">If treatment is started, you’ll receive:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Regular follow-ups for medication titration and monitoring</li>
                <li>Ongoing reviews to optimize effectiveness and manage side effects</li>
                <li>Support letters for work, education, or accommodations (if required)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Treatment modalities - PDF evidence-based */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Evidence-Based Treatment</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Medication, coaching, lifestyle modification, and psychological strategies—all supported by clinical research.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {treatmentModalities.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Delivery / how we work */}
        <div className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {deliveryOptions.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 p-6"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
