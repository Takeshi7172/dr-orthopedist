"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  MessageSquare,
  ClipboardList,
  Compass,
  Scissors,
  Activity,
  HeartPulse,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Консультация",
    description: "Осмотр, изучение снимков, обсуждение вариантов лечения",
    duration: "1 час",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Диагностика",
    description: "КТ, анализы, обследование перед операцией",
    duration: "2-3 дня",
  },
  {
    icon: Compass,
    number: "03",
    title: "Планирование",
    description: "3D-моделирование, выбор импланта, план операции",
    duration: "1-2 дня",
  },
  {
    icon: Scissors,
    number: "04",
    title: "Операция",
    description: "Эндопротезирование с использованием системы MAKO",
    duration: "1.5-2 часа",
  },
  {
    icon: Activity,
    number: "05",
    title: "Восстановление",
    description: "Ранняя активизация, первые шаги с поддержкой",
    duration: "3-5 дней",
  },
  {
    icon: HeartPulse,
    number: "06",
    title: "Реабилитация",
    description: "Контрольные осмотры, ЛФК, возврат к активности",
    duration: "2-3 месяца",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="process-heading">Как проходит лечение</h2>
            <p className="mt-4 text-muted-foreground">
              Понятный путь от первой консультации до полного восстановления
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto">
          {/* Timeline - single vertical line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className="shrink-0 relative z-10 w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Card */}
                    <Card className="flex-1 card-hover overflow-hidden">
                      <div className="h-1 gradient-primary" />
                      <CardContent className="pt-5 pb-5">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <step.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold text-lg">{step.title}</h3>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                {step.duration}
                              </span>
                            </div>
                            <p className="mt-1.5 text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
