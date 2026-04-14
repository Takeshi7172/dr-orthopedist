"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CheckCircle2, Award, GraduationCap, Users, Stethoscope } from "lucide-react";

const credentials = [
  { icon: Award, text: "Стаж более 15 лет", highlight: true },
  { icon: Users, text: "Более 1000 операций", highlight: true },
  { icon: GraduationCap, text: "Повышение квалификации в ведущих клиниках", highlight: false },
  { icon: Stethoscope, text: "Член ассоциации ортопедов РК", highlight: false },
];

const approach = [
  "Индивидуальное планирование каждой операции",
  "Работа с современными имплантами ведущих производителей",
  "Точность установки с использованием системы MAKO",
  "Контроль результата на всех этапах лечения",
];

export function DoctorSection() {
  return (
    <section id="doctor" className="section" aria-labelledby="doctor-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4">Ваш врач</Badge>
            <h2 id="doctor-heading">
              Искаков Булат Серикович
            </h2>
            <p className="mt-4 text-muted-foreground">
              Хирург-ортопед, специалист по эндопротезированию суставов
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-8 lg:gap-12 lg:grid-cols-5 items-start max-w-6xl mx-auto">
          {/* Doctor Photo & Credentials */}
          <AnimatedSection delay={100} className="lg:col-span-2">
            <div>
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl blur-2xl" />

                <div className="relative bg-card rounded-2xl border shadow-lg overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img
                      src="/images/doctor-portrait.jpg"
                      alt="Искаков Булат Серикович — хирург-ортопед"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Credentials */}
                  <div className="p-5 sm:p-6 space-y-3 bg-muted/30">
                    {credentials.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 ${
                          item.highlight ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          item.highlight ? "bg-primary/10" : "bg-muted"
                        }`}>
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Doctor Approach */}
          <AnimatedSection delay={200} className="lg:col-span-3">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border p-6 sm:p-8">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  Подход к лечению
                </h3>

                <ul className="mt-6 space-y-4">
                  {approach.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="relative p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="absolute top-4 left-4 text-6xl text-primary/20 font-serif leading-none">
                  &ldquo;
                </div>
                <p className="relative z-10 text-lg sm:text-xl italic text-foreground/80 pl-8">
                  Моя задача — не просто провести операцию, а помочь пациенту
                  вернуться к активной жизни без боли. Каждый случай уникален,
                  поэтому я уделяю особое внимание планированию.
                </p>
                <footer className="mt-4 pl-8 font-semibold text-primary">
                  — Б.С. Искаков
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
