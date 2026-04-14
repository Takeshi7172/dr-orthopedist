"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calculator, CreditCard, Phone, CheckCircle2 } from "lucide-react";

const factors = [
  "Тип сустава (коленный или тазобедренный)",
  "Сложность случая и объём вмешательства",
  "Выбранный имплант и его производитель",
  "Объём предоперационной диагностики",
];

const included = [
  "Консультация хирурга",
  "Предоперационное обследование",
  "Операция с использованием MAKO",
  "Пребывание в клинике",
  "Послеоперационное наблюдение",
];

export function PricingSection() {
  return (
    <section className="section bg-muted/30" aria-labelledby="pricing-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="pricing-heading">Стоимость лечения</h2>
            <p className="mt-4 text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-6 lg:gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Индивидуальный расчёт
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Итоговая стоимость зависит от:
                    </p>
                    <ul className="mt-4 space-y-2">
                      {factors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-muted-foreground">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="h-full border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Что входит в стоимость
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        Возможна рассрочка
                      </p>
                      <p className="text-sm text-green-600">
                        Без переплат от банков-партнёров
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="btn-primary gap-2" asChild>
                    <a href="tel:+77001234567">
                      <Phone className="h-4 w-4" />
                      Узнать стоимость
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
