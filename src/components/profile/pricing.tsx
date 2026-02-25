import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingItem {
  title: string
  price: string
  description: string
  featured?: boolean
}

// PDF Pricing section (exact wording): Initial Assessment total, Follow-Up, Shared Care — NOT the 3 steps
const pricingItems: PricingItem[] = [
  {
    title: 'Initial ADHD Assessment',
    price: '€300 + €500 + €400',
    description: 'Includes full psychiatric evaluation, diagnostic report, and treatment plan.',
    featured: true,
  },
  {
    title: 'Follow-Up / Titration Appointments',
    price: '€200',
    description: 'Regular follow-ups for medication titration and monitoring, ongoing reviews to optimize effectiveness and manage side effects.',
  },
  {
    title: 'Shared Care Letters and Prescriptions',
    price: 'Available as needed',
    description: 'Support letters for work, education, or accommodations and prescriptions as required.',
  },
]

export default function Pricing({ onBookingClick }: { onBookingClick?: () => void }) {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - PDF Pricing heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for your ADHD assessment and ongoing care.
          </p>
        </div>

        {/* PDF Pricing section: Initial Assessment (€300+€500+€400), Follow-Up €200, Shared Care as needed */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
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
          Please note: This is a private, non-HSE service. Medication prescribing follows Irish national guidelines and may require shared care with your GP.
        </p>

        {/* PDF CTA: Ready to Take the Next Step? */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Take the Next Step?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            You don’t have to struggle alone. Adult ADHD is real, and effective help is available. If you suspect you may have ADHD, book your confidential consultation today.
          </p>
          {onBookingClick && (
            <Button
              onClick={onBookingClick}
              className="bg-blue-700 hover:bg-blue-800 text-white"
              size="lg"
            >
              Book Your ADHD Assessment Now
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
