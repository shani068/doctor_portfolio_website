
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Check } from 'lucide-react'

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-secondary pt-10 pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -ml-48" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content – Professional Profile on top */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 w-fit border border-primary/30">
              <Brain className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700">Consultant Psychiatrist</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-4xl  font-bold leading-tight text-foreground">
                Dr. Deshwinder Sidhu, MD, MA (Healthcare Mgt), MRCPsych, MCPsychI
              </h1>
            </div>

            {/* Professional Profile text from PDF */}
            <div className="space-y-2 max-w-xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr Desh Sidhu is a Consultant Psychiatrist registered with the Irish Medical Council
                (Registration No: 418090). He is a Member of the Royal College of Psychiatrists (UK) and
                the College of Psychiatrists of Ireland.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                He currently works within the Irish public health service and provides independent private assessments
                delivered to high clinical, ethical and governance standards. Dr Sidhu’s clinical focus includes
                comprehensive adult psychiatric assessment, neurodevelopmental (ADHD) assessment, complex diagnostic
                clarification, and structured functional recovery planning.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">
                      Assessments conducted personally by a Consultant Psychiatrist
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Clear differential diagnosis documentation</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Evidence‑based prescribing principles</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">
                      Collaboration with GP and treating clinicians where appropriate
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">
                      Compliance with Irish Medical Council professional standards
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">
                      Clear boundaries between public and private clinical roles
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row pt-6">
              <Button
                onClick={onBookingClick}
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold h-14 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                Book Your ADHD Assessment Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Key professional details */}
            <div className="pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <CardDetail
                  label="Irish Medical Council"
                  value="Registration No: 418090"
                />
                <CardDetail
                  label="Qualifications"
                  value="MD, MA (Healthcare Mgt), MRCPsych, MCPsychI"
                />
                <CardDetail
                  label="Role"
                  value="Clinician - Researcher - Consultant"
                />
              </div>
            </div>
          </div>

          {/* Right - Doctor Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Floating card background */}
            <div className="relative w-full max-w-md h-auto">
              {/* Blue accent shape */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-linear-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-tr from-primary/15 to-transparent rounded-full blur-2xl" />

              {/* Doctor Image Card */}
              <div className="relative bg-white backdrop-blur rounded-2xl p-6 shadow-2xl border border-primary/20">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src="/sardar.jpg"
                    alt="Dr. Desh Sidhu - ADHD and Psychiatry Specialist"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge overlay */}
                <div className="absolute bottom-5 left-6 right-6 bg-white  rounded-lg p-2">
                  <p className="text-sm font-bold text-foreground mb-1">Dr. Desh Sidhu</p>
                  <p className="text-xs text-blue-700 font-semibold">MD, MRCPsych, MCPsychI</p>
                  <p className="text-xs text-muted-foreground mt-1">Consultant Psychiatrist | Private Adult Psychiatric & ADHD Assessment Services

                    Clinician – Researcher – Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CardDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-white/90 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="mt-2 text-sm font-bold leading-relaxed text-blue-700">{value}</p>
    </div>
  )
}
