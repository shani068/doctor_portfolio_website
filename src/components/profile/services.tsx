import { Card } from '@/components/ui/card'
import { ClipboardList, FileCheck, Activity, Heart } from 'lucide-react'

// PDF: Private Services
const privateServices = [
  {
    icon: ClipboardList,
    title: 'Comprehensive Psychiatric Assessment',
    description:
      '90–120 minute structured consultation including full psychiatric history, developmental background, risk assessment, differential diagnosis and detailed consultant report.',
  },
  {
    icon: Activity,
    title: 'Adult ADHD & Neurodevelopmental Assessment',
    description:
      'Detailed developmental history, validated screening instruments, collateral information where appropriate, and formal diagnostic clarification distinguishing ADHD from overlapping psychiatric conditions.',
  },
  {
    icon: FileCheck,
    title: 'Second Opinion & Diagnostic Clarification',
    description:
      'Independent review of prior diagnoses and treatment plans with structured reassessment and clear evidence‑based recommendations.',
  },
  {
    icon: Heart,
    title: 'Functional Recovery Planning',
    description:
      'Integration of psychiatric findings with occupational functioning, sleep, executive function and lifestyle considerations into a personalised recovery strategy.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - PDF: Private Services */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-blue-700">PRIVATE SERVICES</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Private Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Private Adult Psychiatric &amp; ADHD Assessment Services delivered personally by a Consultant Psychiatrist,
            with a focus on comprehensive assessment, diagnostic clarification and structured functional recovery
            planning.
          </p>
        </div>

        {/* Private Services from PDF */}
        <div className="grid gap-8 lg:grid-cols-4">
          {privateServices.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-8"
              >
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-linear-to-br from-blue-500/60 to-blue-700/60" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-blue-700 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
