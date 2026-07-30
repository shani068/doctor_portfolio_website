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
    title: 'Neurodevelopmental Assessment',
    description:
      'Detailed developmental history, validated screening instruments, collateral information where appropriate, and formal diagnostic clarification distinguishing neurodevelopmental presentations from overlapping psychiatric conditions.',
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
    <section id="services" className="py-20 sm:pt-32 bg-background">
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
            Private Adult Psychiatric Services delivered personally by a Consultant Psychiatrist,
            with a focus on comprehensive assessment, diagnostic clarification and structured functional recovery
            planning.
          </p>
        </div>

        {/* Private Services from PDF */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {privateServices.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-200 transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700/80 group-hover:bg-blue-600/10 group-hover:text-blue-700">
                      Clinical Service
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
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
