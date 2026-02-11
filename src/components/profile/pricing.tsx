
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PricingCard {
  title: string
  price: string
  description: string
  featured?: boolean
}

const pricingCards: PricingCard[] = [
  {
    title: 'Initial Review (Psychiatrist)',
    price: '€100',
    description: 'First consultation',
  },
  {
    title: 'Full Assessment (Psychiatrist)',
    price: '€200',
    description: 'Comprehensive evaluation',
    featured: true,
  },
  {
    title: 'Follow-up Consultation (Psychiatrist)',
    price: '€300',
    description: 'Ongoing care',
  },
]

const pricingDetails = [
  {
    label: 'Initial ADHD Assessment:',
    value: '€0 + €0 + €0',
  },
  {
    label: 'Follow-Up / Titration Appointments:',
    value: '€0',
  },
  {
    label: 'Shared Care Letters and Prescriptions:',
    value: 'Available as needed',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, affordable psychiatric and ADHD care with clear pricing
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {pricingCards.map((card, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                card.featured
                  ? 'md:scale-105 border-2 border-primary shadow-2xl'
                  : 'border border-border hover:border-primary/50 hover:shadow-lg'
              } p-8 flex flex-col`}
            >
              {/* Featured Badge */}
              {card.featured && (
                <div className="absolute -top-0 right-6 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>

                <div className="py-6 border-t border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{card.price}</span>
                  </div>
                </div>

                {card.featured && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm text-foreground">Full psychiatric evaluation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm text-foreground">Diagnostic report included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm text-foreground">Treatment plan provided</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Pricing Details Section */}
        <div className="max-w-3xl mx-auto bg-white/50 dark:bg-white/5 rounded-xl border border-primary/20 p-8 space-y-6">
          <div className="space-y-4">
            {pricingDetails.map((detail, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-foreground mb-1">{detail.label}</p>
                <p className="text-primary font-bold text-lg">{detail.value}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-primary/20 pt-6 space-y-3 text-center">
            <p className="text-sm font-semibold text-foreground">
              Includes full psychiatric evaluation, diagnostic report, and treatment plan
            </p>
            <p className="text-sm text-primary">
              Follow-Up / Titration Appointments: €0
            </p>
            <p className="text-sm text-muted-foreground">
              Shared Care Letters and Prescriptions: Available as needed
            </p>
          </div>

          {/* Important Note */}
          <div className="mt-6 pt-6 border-t border-primary/20">
            <p className="text-xs text-center text-muted-foreground">
              <span className="block mb-2">
                Please note: This is a private, non-HSE service.
              </span>
              Medication prescribing follows Irish national guidelines and may require shared care with your GP.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
