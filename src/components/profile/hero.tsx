
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, CheckCircle } from 'lucide-react'

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary pt-10 pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -ml-48" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 w-fit border border-primary/30">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Psychiatrist-Led Adult ADHD</span>
            </div>

            {/* Main heading - from PDF */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Adult <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-800">ADHD</span> Assessment
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                & Treatment — Consultant Psychiatrist Led
              </h2>
            </div>

            {/* Subheading - PDF intro */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We offer comprehensive, evidence-based assessment and management for Adult ADHD,
              led exclusively by a Consultant Psychiatrist with over 8 years of experience in diagnosing
              and treating complex mental health conditions. Our service is discreet, professional, and
              tailored to adults seeking clarity, structure, and support in managing symptoms of ADHD.
            </p>

            {/* Quick Features - from PDF Why Choose Us */}
            <div className="space-y-3 py-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 shrink-0" />
                <span className="text-sm font-medium text-foreground">Specialist-led care — full journey overseen by a Consultant Psychiatrist</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 shrink-0" />
                <span className="text-sm font-medium text-foreground">No waiting lists — quick access to appointments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-700 shrink-0" />
                <span className="text-sm font-medium text-foreground">Personalized plans & evidence-based treatment</span>
              </div>
            </div>

            {/* Do You Struggle With… — from PDF */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Do you struggle with…</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Constant distraction or difficulty focusing?</li>
                <li>• Feeling overwhelmed, even with small tasks?</li>
                <li>• Losing things, missing deadlines, or procrastinating?</li>
                <li>• Being told you’re &quot;smart but not living up to your potential&quot;?</li>
                <li>• Emotional highs and lows, restlessness, or poor impulse control?</li>
              </ul>
              <p className="text-sm text-foreground mt-2 font-medium">You may be living with undiagnosed ADHD. Effective help is available.</p>
            </div>

            {/* CTA Buttons - PDF CTA */}
            <div className="flex flex-col gap-3 sm:flex-row pt-6">
              <Button
                onClick={onBookingClick}
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold h-14 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                Book Your ADHD Assessment Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center cursor-pointer justify-center hover:text-blue-700 gap-2 text-base font-semibold h-14 px-8 border-2 border-primary text-blue-700 hover:bg-primary/10 bg-white dark:bg-transparent rounded-lg"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/20">
              <div>
                <p className="text-2xl font-bold text-blue-700">1000+</p>
                <p className="text-xs text-muted-foreground">Patients Treated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">24/7</p>
                <p className="text-xs text-muted-foreground">Emergency Support</p>
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
                    src="/doctor-image.jpg"
                    alt="Dr. Dash Sidhu - ADHD and Psychiatry Specialist"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white  rounded-lg p-4  ">
                  <p className="text-sm font-bold text-foreground mb-1">Dr. Dash Sidhu</p>
                  <p className="text-xs text-blue-700 font-semibold">ADHD & Psychiatry Specialist</p>
                  <p className="text-xs text-muted-foreground mt-1">Consultant Psychiatrist | 8+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
