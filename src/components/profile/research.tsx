import { Card } from '@/components/ui/card'

export default function Research() {
  return (
    <section id="research" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Research &amp; Academic Contributions
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 space-y-3 border-border">
            <h3 className="text-lg font-bold text-foreground">Adult ADHD Referral Pathway Research (2025)</h3>
            <p className="text-sm text-muted-foreground">
              Research examining optimisation of adult ADHD referral pathways within Irish services, highlighting
              commitment to evidence‑based service improvement.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border">
            <h3 className="text-lg font-bold text-foreground">
              European Psychiatric Association Collaborative Study
            </h3>
            <p className="text-sm text-muted-foreground">
              Co‑author of a multi‑national survey on therapeutic drug monitoring in psychiatry, published in the World
              Journal of Biological Psychiatry.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border">
            <h3 className="text-lg font-bold text-foreground">BMJ Case Report Publication</h3>
            <p className="text-sm text-muted-foreground">
              Published case report examining Takotsubo syndrome in bipolar disorder during alcohol withdrawal,
              demonstrating expertise in complex psychiatric–medical interface presentations.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-border">
            <h3 className="text-lg font-bold text-foreground">
              Clinical Audit &amp; Quality Improvement Work
            </h3>
            <p className="text-sm text-muted-foreground">
              Audit work focusing on physical examination compliance in psychiatric admissions, reinforcing strong
              grounding in clinical governance and patient safety.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

