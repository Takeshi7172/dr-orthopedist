import { Suspense } from "react";
import { Header, Footer, FloatingWhatsApp } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  DiagnosisSection,
  DoctorSection,
  MakoSection,
  BenefitsSection,
  ProcessSection,
  RehabSection,
  FAQSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
  ContactsSection,
} from "@/components/sections";

// Loading fallback for sections
function SectionSkeleton() {
  return (
    <div className="py-16 md:py-20">
      <div className="container">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded-lg w-1/3 mx-auto" />
          <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-muted rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Hero - always rendered immediately */}
        <HeroSection />

        {/* Main content sections */}
        <Suspense fallback={<SectionSkeleton />}>
          <ProblemSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <DiagnosisSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <DoctorSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <MakoSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <BenefitsSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <RehabSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CTASection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ContactsSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
