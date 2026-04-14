"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Target,
  Heart,
  TrendingUp,
  Footprints,
  ShieldCheck,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Точная установка импланта",
    description: "Благодаря системе MAKO — отклонение менее 0.5мм",
  },
  {
    icon: Heart,
    title: "Минимальная травматизация",
    description: "Щадящий подход к окружающим тканям и связкам",
  },
  {
    icon: TrendingUp,
    title: "Предсказуемое восстановление",
    description: "Понятный план реабилитации с чёткими сроками",
  },
  {
    icon: Footprints,
    title: "Быстрое возвращение к движению",
    description: "Первые шаги уже на следующий день после операции",
  },
  {
    icon: ShieldCheck,
    title: "Снижение риска осложнений",
    description: "Современные протоколы и антибактериальная защита",
  },
  {
    icon: Clock,
    title: "Долговечный результат",
    description: "Качественные импланты служат 15–25 лет",
  },
];

export function BenefitsSection() {
  return (
    <section className="section bg-muted/30" aria-labelledby="benefits-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="benefits-heading">
              Преимущества для пациента
            </h2>
            <p className="mt-4 text-muted-foreground">
              Что вы получаете, выбирая современный подход к эндопротезированию
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <Card className="h-full card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-200 hover:bg-primary/15">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
