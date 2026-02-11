
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
              <span className="text-sm font-semibold text-primary">ADHD & Psychiatry Expert</span>
            </div>

            {/* Main heading - Now "Expert ADHD" */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">ADHD</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                & Psychiatric Care for All Ages
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Specialized diagnosis and treatment of ADHD and psychiatric conditions with evidence-based, comprehensive care. Medication management, family counseling, and behavioral coaching tailored to your needs.
            </p>

            {/* Quick Features */}
            <div className="space-y-3 py-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Comprehensive ADHD Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Personalized Medication Management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Family Support & Behavioral Coaching</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row pt-6">
              <Button
                onClick={onBookingClick}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-base font-semibold h-14 px-8 rounded-lg shadow-lg"
                size="lg"
              >
                Book Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center hover:text-primary gap-2 text-base font-semibold h-14 px-8 border-2 border-primary text-primary hover:bg-primary/10 bg-white dark:bg-transparent rounded-lg"
                size="lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/20">
              <div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-xs text-muted-foreground">Patients Treated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Emergency Support</p>
              </div>
            </div>
          </div>

          {/* Right - Doctor Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Floating card background */}
            <div className="relative w-full max-w-md h-auto">
              {/* Blue accent shape */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl" />

              {/* Doctor Image Card */}
              <div className="relative bg-white backdrop-blur rounded-2xl p-6 shadow-2xl border border-primary/20">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
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
                  <p className="text-xs text-primary font-semibold">ADHD & Psychiatry Specialist</p>
                  <p className="text-xs text-muted-foreground mt-1">MD | 15+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
