"use client";

import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, FileText, Clock, Brain, Heart, Zap, User, BarChart3, Activity } from 'lucide-react'
import HeroPage from "./_components/HeroPage"
import Footer from "@/app/_components/Footer"

interface SubService {
  name: string;
  price: number;
}

interface ServiceDelivery {
  title: string;
  subServices: SubService[];
}

interface Doctor {
  _id: string;
  serviceDelivery: ServiceDelivery[];
}

interface ApiResponse {
  data: {
    doctors: {
      doctor: Doctor;
      adhdServicesFound: number;
    };
  };
} 

export default function ADHDAssessmentPage() {
  const { data: doctorDetails } = useFetch<ApiResponse>({
    path: "/api/v1/doctor/get-adhd-doctor/6884a919369bd5b5a925e1de",
    queryKey: ["doctor-details"],
  });

  const firstDoctor = doctorDetails?.data?.doctors?.doctor;

  const adhdService = firstDoctor?.serviceDelivery?.find(
    (service) => service.title === "ADHD"
  );

  const initialPrice = (adhdService?.subServices?.find(
    (sub) => sub.name === "Initial"
  )?.price) ?? 0;

  const fullAssessmentPrice = (adhdService?.subServices?.find(
    (sub) => sub.name === "Full Assessment"
  )?.price) ?? 0;

  const followUpPrice = (adhdService?.subServices?.find(
    (sub) => sub.name === "Follow-up Consultation"
  )?.price) ?? 0;

  const doctorId = firstDoctor?._id as string;

  return (
    <Suspense fallback={null}>
      <BookingProvider>
        <HeroPage initialPrice={initialPrice} doctorId={doctorId} />

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Psychiatrist-Led Adult ADHD Assessment & Treatment At HealthDirect.ie
              </h2>
              <p className="text-lg text-[#525252] max-w-4xl mx-auto leading-relaxed">
                At HealthDirect.ie, we offer comprehensive, evidence-based assessment and management for Adult ADHD,
                led exclusively by a Consultant Psychiatrist with over 8 years of specialist experience in diagnosing
                and treating complex mental health conditions. Our service is discreet, professional, and tailored to
                adults seeking clarity, structure, and support in managing symptoms of ADHD.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-[#525252] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialist-Led Care</h3>
                <p className="text-gray-600">
                  Your full journey—from assessment to treatment—is overseen by a Consultant Psychiatrist,
                  ensuring the highest standard of clinical expertise.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-[#525252] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">No Waiting Lists</h3>
                <p className="text-gray-600">
                  Quick access to appointments, so you don't have to wait months for answers.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <FileText className="w-12 h-12 text-[#525252] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Plans</h3>
                <p className="text-gray-600">
                  Each assessment is uniquely tailored, accounting for co-existing conditions such as
                  anxiety, depression, or emotional dysregulation.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Evidence-based treatment</h3>
                    <p className="text-gray-600">
                      Medication, coaching, lifestyle modification, and psychological strategies—all supported by clinical research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Discreet and professional</h3>
                    <p className="text-gray-600">
                      We maintain strict confidentiality and deliver compassionate, stigma-free care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FAFAFA] p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialists waiting for 7 days a week</h3>
                <Button className="bg-button-primary text-white">
                  <Link href={`/clinic/book-appointment/calendar?doctorId=${doctorId}&service=adhd&price=${initialPrice}`}>BOOK AN APPOINTMENT</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Do You Struggle With...</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#525252]">Constant distraction or difficulty focusing?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#525252]">Feeling overwhelmed, even with small tasks?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#525252]">Frequently losing things, missing deadlines, or procrastinating?</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#525252]">Being told you're "smart but not living up to your potential"?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#525252]">Experiencing emotional highs and lows, restlessness, or poor impulse control?</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-lg text-[#525252] mt-8">
              You may be living with undiagnosed Attention-Deficit/Hyperactivity Disorder (ADHD).
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Our 3-Step ADHD Assessment Process</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Pre-Assessment Screening</h3>
                    <p className="text-[#525252] mb-3">
                      You'll complete a set of validated questionnaires to explore attention, hyperactivity,
                      executive functioning, and emotional regulation.
                    </p>
                    <p className="text-[#525252]">
                      If ADHD is likely, we'll proceed to full diagnostic assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Psychiatric Assessment</h3>
                    <p className="text-[#525252] mb-3">
                      A 90-minute video consultation with the Consultant Psychiatrist, including:
                    </p>
                    <ul className="text-[#525252] space-y-1 ml-4 list-disc">
                      <li> Full psychiatric history</li>
                      <li> Symptom profiling using DSM-5 criteria</li>
                      <li> Exploration of co-existing mental health issues</li>
                      <li> Functional impact at work, relationships, and home</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Diagnosis & Treatment Planning</h3>
                    <p className="text-gray-600 mb-3">Same-day diagnosis, if appropriate</p>
                    <p className="text-gray-600 mb-3">Personalized treatment plan including:</p>
                    <ul className="text-gray-600 space-y-1 ml-4 pl-4 list-disc">
                      <li> Medication options (e.g. stimulants, non-stimulants)</li>
                      <li> Psychoeducation</li>
                      <li> ADHD coaching referrals</li>
                      <li> Support for co-existing conditions (e.g. anxiety, depression)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] p-8 rounded-lg h-fit">
                <p className="text-xl text-[#525252] mb-6">
                  These three consultations provide a comprehensive assessment and diagnostic process for ADHD, ensuring that the individual receives the most accurate diagnosis and a personalised treatment plan.
                </p>
                <Button className="bg-button-primary text-white">
                  <Link href={`/clinic/book-appointment/calendar?doctorId=${doctorId}&service=adhd&price=${initialPrice}`}>BOOK AN APPOINTMENT</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8">Ongoing Care & Medication Titration</h2>
            <p className="text-lg text-[#525252] text-center mb-8">
              If treatment is started, you'll receive:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-[#525252]">Regular follow-ups for medication titration and monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-[#525252]">Ongoing reviews to optimize effectiveness and manage side effects</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-[#525252]">Support letters for work, education, or accommodations (if required)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-semibold text-[#525252] mb-4">€{initialPrice}</div>
                <h3 className="text-xl font-semibold mb-4">Initial Review (Psychiatrist)</h3>
              </Card>
              <Card className="p-6 text-center border-2 border-teal-600">
                <div className="text-4xl font-semibold text-[#525252] mb-4">€{fullAssessmentPrice}</div>
                <h3 className="text-xl font-semibold mb-4">Full Assessment (Psychiatrist)</h3>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-semibold text-[#525252] mb-4">€{followUpPrice}</div>
                <h3 className="text-xl font-semibold mb-4">Follow-up Consultation (Psychiatrist)</h3>
              </Card>
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold">
                Initial ADHD Assessment: €{initialPrice} + €{followUpPrice} + €{fullAssessmentPrice}
              </p>
              <p className="text-[#525252]">
                Includes full psychiatric evaluation, diagnostic report, and treatment plan
              </p>
              <p className="text-[#525252]">
                Follow-Up / Titration Appointments: €{followUpPrice}
              </p>
              <p className="text-[#525252]">
                Shared Care Letters and Prescriptions: Available as needed
              </p>
              <p className="text-sm text-[#525252] mt-4">
                Please note: This is a private, non-HSE service. Medication prescribing follows Irish
                national guidelines and may require shared care with your GP.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Who is this service for?</h2>
            <p className="text-lg text-[#525252] text-center leading-relaxed mb-6">
              Our Adult ADHD service is for people aged 18 and over who think they may have ADHD, or who already have a diagnosis and want a specialist-led review. It's designed for adults whose challenges with attention, organisation, time management, impulsivity, or emotional regulation affect their work, studies, relationships, or daily life.
            </p>
            <p className="text-lg text-[#525252] mb-4">
              This service is suitable for:
            </p>
            <ul className="text-lg text-[#525252] space-y-2 max-w-4xl mx-auto">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Adults (18+) who suspect they have ADHD (no previous diagnosis)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Adults seeking a second opinion or specialist reassessment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Adults diagnosed in childhood who want a medication review or updated plan</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Adults with co-occurring conditions (such as anxiety, depression, or ASD traits) who need integrated care</span>
              </li>
            </ul>
            <p className="text-lg text-[#525252] text-center mt-6 font-semibold">
              Note: This is a private, psychiatrist-led adult service. We do not assess children.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-button-primary text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
              Adults with ADHD have problems in six major areas of executive functioning
            </h2>
            <p className="text-center text-lg mb-12">
              Currently, our ADHD online consultations are tailored for adults aged 18 and above who display symptoms of ADHD or have concerns about their condition.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Activation</h3>
                <p className="text-gray-200">
                  Problems with organization, prioritizing tasks, and activating to work.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Focus</h3>
                <p className="text-gray-200">
                  Problems with sustaining focus and processing efficiency.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Effort</h3>
                <p className="text-gray-200">
                  Problems with regulating alertness, sustaining effort and processing speed.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emotion</h3>
                <p className="text-gray-200">
                  Difficulty with frustration and modulating emotions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Memory</h3>
                <p className="text-gray-200">
                  Problems with working memory and accessing recall.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-[#525252]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Action</h3>
                <p className="text-gray-200">
                  Problems with monitoring and self-regulating action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg text-[#525252] mb-8">
              You don't have to struggle alone. Adult ADHD is real, and effective help is available.
              If you suspect you may have ADHD, book your confidential consultation today.
            </p>
            <div className="space-y-4">
              <Button className="bg-button-primary text-white px-4 py-3 text-base font-semibold">
                <Link href={`/clinic/book-appointment/calendar?doctorId=${doctorId}&service=adhd&price=${initialPrice}`}>Book Your ADHD Assessment Now</Link>
              </Button>
              <p className="text-[#525252]">or</p>
              <p className="text-[#525252]">
                Contact Us at{" "}
                <a href="mailto:info@healthdirect.ie" className="text-teal-600 hover:underline">
                  info@healthdirect.ie
                </a>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </BookingProvider>
    </Suspense>
  )
}
