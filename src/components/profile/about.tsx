
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <section id="about" className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-blue-700 hover:bg-primary/20">Professional Profile</Badge>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Professional Profile
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr Desh Sidhu is a Consultant Psychiatrist registered with the Irish Medical Council (Registration No: 418090). He is a Member of the Royal College of Psychiatrists (UK) and the College of Psychiatrists of Ireland.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                He currently works within the Irish public health service and provides independent private assessments delivered to high clinical, ethical and governance standards. Dr Sidhu’s clinical focus includes comprehensive adult psychiatric assessment, neurodevelopmental (ADHD) assessment, complex diagnostic clarification, and structured functional recovery planning.
              </p>
            </div>

            {/* Clinical Governance & Ethical Standards */}
            
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
                    <h3 className="text-2xl font-bold text-foreground">Dr Desh Sidhu, MD, MRCPsych, MCPsychI</h3>
                    <p className="text-muted-foreground">Consultant Psychiatrist</p>
                    <p className="text-sm text-blue-700 font-semibold mt-1">
                      Irish Medical Council Registration No: 418090
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Private Adult Psychiatric &amp; ADHD Assessment Services
                    </p>
                    <p className="text-sm text-muted-foreground">Clinician – Researcher – Consultant</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <Card className="absolute -bottom-4 -right-4 bg-blue-700 text-white border-0 p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xs font-semibold">Irish Medical Council</div>
                <p className="text-xs">Registration No: 418090</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
