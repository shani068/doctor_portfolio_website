
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-blue-700 hover:bg-primary/20">Professional Profile</Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Dr. Deshwinder Sidhu</h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">
              MD, MA (Healthcare Mgt), MRCPsych, MCPsychI, Dip. MH Law &amp; HR (WHO)
            </p>
            <p className="text-blue-700 font-semibold mt-1">Consultant Psychiatrist</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-foreground">Clinical Experience &amp; Expertise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dr. Sidhu completed both his Basic and Higher Specialist Training Programme in Ireland and holds
                dual memberships with the College of Psychiatrists of Ireland and the Royal College of Psychiatrists.
                He has extensive experience managing complex psychiatric presentations within the Irish healthcare
                system.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                His specialist work includes liaison and psychological medicine at St. James&apos;s Hospital, with a
                focus on the overlap between physical and mental health in acute emergency settings, alongside supervised
                Cognitive Behavioural Therapy integration in clinical practice.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-foreground">Healthcare Management &amp; Service Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complementing clinical practice, Dr. Sidhu holds an MA in Healthcare Management from the Institute of
                Public Administration, Dublin. His work bridges clinical demand with service delivery and systems
                performance.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                His dissertation, &ldquo;Adult ADHD in Ireland: Improving Service Efficiency through Audit and Model of
                Care,&rdquo; outlines a strategic roadmap for neurodevelopmental service improvement through better patient
                flow and resource allocation.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-foreground">Academic &amp; Professional Leadership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dr. Sidhu was awarded Best Academy Teacher by the University of Galway and contributes as a clinical
                examiner and mentor to junior medical staff.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He represented Ireland at the European Forum for Psychiatric Trainees in Zurich, presenting on workforce
                wellbeing and the destigmatization of psychiatry.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-foreground">Policy, Ethics &amp; Professional Philosophy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He holds an International Diploma in Mental Health Law and Human Rights (awarded in association with the
                WHO) and is recognized for a calm, decisive style that combines systematic observation with empathic
                engagement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                His approach remains collaborative and multidisciplinary, with emphasis on patient autonomy and continuous
                healthcare model improvement.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
