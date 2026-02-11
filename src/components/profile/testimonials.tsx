
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'ADHD Patient',
    content:
      'Dr. Sidhu provided the most comprehensive ADHD assessment I\'ve ever experienced. His virtual consultations are convenient, and his care plan has truly improved my quality of life.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Home Care Client',
    content:
      'The home visit service was exactly what my mother needed. Dr. Sidhu was professional, compassionate, and provided excellent personalized care in the comfort of our home.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Parent',
    content:
      'As a parent of a child with ADHD, I found Dr. Sidhu\'s expertise invaluable. The flexible appointment options and thorough explanations made everything so much easier to understand.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Patient',
    content:
      'Virtual consultations have been a game-changer for managing my health. Dr. Sidhu\'s personalized approach and accessibility make him an exceptional healthcare provider.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Chronic Condition Patient',
    content:
      'The home care services are outstanding. Dr. Sidhu\'s team provides consistent, caring support that has greatly improved my health outcomes and peace of mind.',
    rating: 5,
  },
  {
    name: 'James Mitchell',
    role: 'General Patient',
    content:
      'From booking to consultation, everything was seamless. Dr. Sidhu listens carefully, provides thorough assessments, and truly cares about his patients\' wellbeing.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from patients who have benefited from Dr. Sidhu's compassionate care
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative flex flex-col border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6 space-y-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
