"use client";

import { AlertCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const symptoms = [
  { text: "Трудно подниматься по лестнице", severe: true },
  { text: "Боль при ходьбе", severe: true },
  { text: "Скованность по утрам", severe: false },
  { text: "Невозможность пройти больше 200–300 метров", severe: true },
  { text: "Зависимость от обезболивающих", severe: true },
];

export function ProblemSection() {
  return (
    <section id="problems" className="section" aria-labelledby="problems-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="problems-heading">
              Когда суставная боль{" "}
              <span className="text-destructive">мешает жить</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Узнайте себя в этих симптомах? Это сигнал о том, что сустав
              нуждается в профессиональной помощи.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto">
          <ul className="space-y-3 sm:space-y-4" role="list">
            {symptoms.map((symptom, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <li
                  className={`
                    flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl
                    border transition-all duration-300
                    hover:shadow-md hover:-translate-x-1
                    ${symptom.severe
                      ? "bg-destructive/5 border-destructive/20"
                      : "bg-muted/50 border-border"
                    }
                  `}
                >
                  <div className={`
                    shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                    ${symptom.severe ? "bg-destructive/10" : "bg-muted"}
                  `}>
                    <AlertCircle className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      symptom.severe ? "text-destructive" : "text-muted-foreground"
                    }`} />
                  </div>
                  <span className="text-base sm:text-lg">{symptom.text}</span>
                </li>
              </AnimatedSection>
            ))}
          </ul>

          <AnimatedSection delay={500}>
            <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-lg sm:text-xl">
                <span className="font-semibold text-primary">
                  Если вы узнаёте себя
                </span>{" "}
                — стоит пройти консультацию
              </p>
              <Button asChild className="mt-4 btn-primary" size="lg">
                <a href="#appointment">
                  Записаться на приём
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
