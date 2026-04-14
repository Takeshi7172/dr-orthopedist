"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Scan, Target, Shield, Cpu, Info } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "3D-моделирование",
    description: "Создаёт точную трёхмерную модель вашего сустава на основе КТ",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Target,
    title: "Точность 0.5мм",
    description: "Планирование операции с субмиллиметровой точностью",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Shield,
    title: "Контроль в реальном времени",
    description: "Робот отслеживает положение инструментов во время операции",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cpu,
    title: "Защита тканей",
    description: "Автоматическая остановка при выходе за границы зоны",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export function MakoSection() {
  return (
    <section id="mako" className="section relative overflow-hidden" aria-labelledby="mako-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Cpu className="h-3 w-3" />
              Технология
            </Badge>
            <h2 id="mako-heading">
              Роботизированная система{" "}
              <span className="gradient-text">MAKO</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Передовая технология для точного эндопротезирования суставов,
              используемая в ведущих клиниках мира
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full card-hover text-center border-0 shadow-md bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 pb-6">
                  <div className={`mx-auto w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border">
            <img
              src="/images/mako-robot.jpg"
              alt="Роботизированная система MAKO Stryker в операционной"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="h-1 gradient-primary" />
              <CardContent className="pt-6 flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Важно понимать</p>
                  <p className="mt-1 text-muted-foreground">
                    MAKO не заменяет хирурга — решение и операция остаются за врачом.
                    Робот лишь помогает достичь максимальной точности установки импланта,
                    что влияет на срок его службы и качество восстановления.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
