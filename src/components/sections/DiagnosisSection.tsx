"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const kneeConditions = [
  { name: "Гонартроз", description: "Износ хрящевой ткани" },
  { name: "Деформация оси", description: "Искривление ноги" },
  { name: "Последствия травм", description: "Повреждения связок, менисков" },
  { name: "Нестабильность", description: "Подвывихи, разболтанность" },
];

const hipConditions = [
  { name: "Коксартроз", description: "Артроз тазобедренного сустава" },
  { name: "Асептический некроз", description: "Нарушение кровоснабжения" },
  { name: "Переломы", description: "Перелом шейки бедра" },
  { name: "Врождённые патологии", description: "Дисплазия и др." },
];

function JointIcon({ type }: { type: "knee" | "hip" }) {
  return (
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {type === "knee" ? (
          <>
            <circle cx="12" cy="8" r="4" />
            <circle cx="12" cy="16" r="4" />
            <path d="M12 12v0" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M12 17v4M8 21h8" />
          </>
        )}
      </svg>
    </div>
  );
}

export function DiagnosisSection() {
  return (
    <section className="section bg-muted/30" aria-labelledby="diagnosis-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="diagnosis-heading">
              С какими диагнозами работает врач
            </h2>
            <p className="mt-4 text-muted-foreground">
              Специализация на эндопротезировании крупных суставов нижних конечностей
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-6 lg:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full card-hover border-primary/10 overflow-hidden">
              <div className="h-1 gradient-primary" />
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <JointIcon type="knee" />
                  <div>
                    <CardTitle className="text-xl">Коленный сустав</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Тотальное и частичное протезирование
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {kneeConditions.map((condition, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <div>
                        <span className="font-medium">{condition.name}</span>
                        <p className="text-sm text-muted-foreground">{condition.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="h-full card-hover border-primary/10 overflow-hidden">
              <div className="h-1 gradient-primary" />
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <JointIcon type="hip" />
                  <div>
                    <CardTitle className="text-xl">Тазобедренный сустав</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Первичное и ревизионное протезирование
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {hipConditions.map((condition, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <div>
                        <span className="font-medium">{condition.name}</span>
                        <p className="text-sm text-muted-foreground">{condition.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
