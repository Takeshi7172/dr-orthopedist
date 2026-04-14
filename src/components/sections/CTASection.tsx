"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Нужна ли операция в вашем случае",
  "Какие есть альтернативы",
  "Реальные перспективы восстановления",
];

export function CTASection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Не откладывайте решение,
              <br />
              <span className="opacity-90">если боль ограничивает жизнь</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl opacity-90">
              Консультация поможет понять:
            </p>

            <ul className="mt-6 inline-flex flex-col items-start gap-3 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg h-14 px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href="#appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Записаться на приём
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-70">
              Первичная консультация — бесплатно
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
