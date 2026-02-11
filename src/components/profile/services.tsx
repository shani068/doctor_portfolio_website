import { Card } from '@/components/ui/card'
import {
  Brain,
  Pill,
  Users,
  Lightbulb,
  Video,
  Home,
  Heart,
  Activity,
} from 'lucide-react'

const primaryServices = [
  {
    icon: Brain,
    title: 'Diagnostic Assessment',
    description:
      'Comprehensive ADHD and psychiatric evaluation using evidence-based diagnostic tools. Detailed assessment across all age groups from children to adults with thorough clinical interviews and testing.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description:
      'Personalized medication selection and monitoring with regular follow-ups. We ensure optimal dosing and minimal side effects while tracking treatment efficacy over time.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Family Counseling',
    description:
      'Supportive family therapy to help families understand ADHD and manage its impact. We provide coping strategies and communication tools for the whole family unit.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Lightbulb,
    title: 'Behavioral Coaching',
    description:
      'Personalized coaching for developing coping strategies and life skills. Learn organizational techniques, time management, and behavioral modification strategies tailored to your needs.',
    color: 'from-green-500 to-teal-600',
  },
]

const supportingServices = [
  {
    icon: Video,
    title: 'Virtual Consultations',
    description: 'Convenient video appointments from home',
  },
  {
    icon: Home,
    title: 'Home Visits',
    description: 'In-person care at your residence',
  },
  {
    icon: Heart,
    title: 'Home Care Support',
    description: 'Ongoing care and monitoring at home',
  },
  {
    icon: Activity,
    title: 'General Psychiatry',
    description: 'Comprehensive mental health services',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary">TREATMENT APPROACHES</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Our Core Treatment Approaches
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine multiple evidence-based treatment modalities to provide comprehensive care for ADHD and psychiatric conditions across all ages
          </p>
        </div>

        {/* Primary Services - Large Cards */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {primaryServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-8"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.color}`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full`} />
                </div>
              </Card>
            )
          })}
        </div>

        {/* Supporting Services - Smaller Cards */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Delivery Methods & Additional Services</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
