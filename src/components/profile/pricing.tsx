import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingItem {
  title: string
  price: string
  description: string
  featured?: boolean
}

// PDF: Private Fees
const pricingItems: PricingItem[] = [
  {
    title: 'Standard Psychiatric Assessment',
    price: '€600',
    description:
      'Comprehensive Psychiatric Assessment as described under Private Services, including full psychiatric history, developmental background, risk assessment, differential diagnosis and detailed consultant report.',
    featured: false,
  },
  {
    title: 'Neurodevelopmental Assessment',
    price: '€900',
    description:
      'Neurodevelopmental Assessment including detailed developmental history, validated screening instruments, collateral information where appropriate, and formal diagnostic clarification distinguishing neurodevelopmental presentations from overlapping psychiatric conditions.',
  },
  {
    title: 'Second Opinion',
    price: '€800',
    description:
      'Second Opinion & Diagnostic Clarification with independent review of prior diagnoses and treatment plans, structured reassessment and clear evidence‑based recommendations.',
  },
  {
    title: 'Functional Recovery Planning Add‑On',
    price: '€300',
    description:
      'Functional Recovery Planning integrating psychiatric findings with occupational functioning, sleep, executive function and lifestyle considerations into a personalised recovery strategy.',
  },
]

export default function Pricing({ onBookingClick }: { onBookingClick?: () => void }) {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - PDF: Private Fees */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Private Fees
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Private adult psychiatric assessments with transparent fees as outlined below.
          </p>
        </div>

        {/* PDF: Private Fees */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {pricingItems.map((item, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                item.featured
                  ? 'md:scale-105 border-2 border-primary shadow-2xl'
                  : 'border border-border hover:border-primary/50 hover:shadow-lg'
              } p-8 flex flex-col`}
            >
              {item.featured && (
                <div className="absolute top-0 right-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FULL PATHWAY
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                <div className="py-4 border-t border-border">
                  <span className="text-2xl font-bold text-blue-700">{item.price}</span>
                </div>

                {item.featured && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-700 shrink-0" />
                      <span className="text-sm text-foreground">Full psychiatric evaluation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-700 shrink-0" />
                      <span className="text-sm text-foreground">Diagnostic report included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-700 shrink-0" />
                      <span className="text-sm text-foreground">Treatment plan provided</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* PDF disclaimer */}
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Fees may vary depending on complexity and requirement for collateral information.
        </p>

        {/* PDF CTA: Ready to Take the Next Step? */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Take the Next Step?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            You don’t have to struggle alone. Effective help is available. Book your confidential consultation today.
          </p>
          {onBookingClick && (
            <Button
              onClick={onBookingClick}
              className="bg-blue-700 hover:bg-blue-800 text-white"
              size="lg"
            >
              Book Appointment
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
