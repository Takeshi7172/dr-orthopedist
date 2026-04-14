"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

const timeline = [
  { day: "День 1", action: "Первые шаги с ходунками" },
  { day: "Неделя 1", action: "Ходьба по коридору, подъём по лестнице" },
  { day: "2-4 недели", action: "Переход на трость" },
  { day: "1-2 месяца", action: "Ходьба без опоры" },
  { day: "3 месяца", action: "Возврат к обычной активности" },
];

const rehabPoints = [
  {
    title: "Ранняя активизация",
    description: "Подъём и первые шаги уже на следующий день после операции под контролем специалиста",
  },
  {
    title: "Постепенная нагрузка",
    description: "Индивидуальный план увеличения активности с учётом вашего состояния",
  },
  {
    title: "Постоянное сопровождение",
    description: "Контрольные осмотры через 2 недели, 1, 3 и 6 месяцев после операции",
  },
  {
    title: "Программа ЛФК",
    description: "Комплекс упражнений для укрепления мышц и восстановления подвижности",
  },
];

export function RehabSection() {
  return (
    <section className="section bg-muted/30" aria-labelledby="rehab-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="rehab-heading">Реабилитация</h2>
            <p className="mt-4 text-muted-foreground">
              Снимаем страх «а что потом?» — сопровождаем на всех этапах восстановления
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-8 lg:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Timeline */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border p-6 sm:p-8">
              <h3 className="font-semibold text-xl flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                Сроки восстановления
              </h3>

              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="shrink-0 w-24 text-sm font-medium text-primary">
                      {item.day}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="text-muted-foreground">{item.action}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                * Сроки индивидуальны и зависят от состояния здоровья, возраста и типа операции
              </p>
            </div>
          </AnimatedSection>

          {/* Rehab points */}
          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {rehabPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{point.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
