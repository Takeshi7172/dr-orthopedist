"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Это больно?",
    answer:
      "Во время операции применяется анестезия (спинальная или общая), поэтому боли вы не чувствуете. После операции болевые ощущения контролируются современными обезболивающими препаратами. Большинство пациентов отмечают, что дискомфорт после операции значительно меньше хронической боли, которую они испытывали до неё.",
  },
  {
    question: "Сколько служит протез?",
    answer:
      "Современные эндопротезы ведущих производителей рассчитаны на 15-25 лет службы. Срок зависит от нескольких факторов: веса пациента, уровня физической активности, соблюдения рекомендаций врача и качества импланта. При правильной эксплуатации многие протезы служат и дольше.",
  },
  {
    question: "Когда можно ходить?",
    answer:
      "Первые шаги с опорой на ходунки или костыли делаются уже на следующий день после операции. Через 2-4 недели большинство пациентов переходят на трость. Полная ходьба без опоры обычно возможна через 4-8 недель, в зависимости от индивидуальных особенностей.",
  },
  {
    question: "Есть ли риск осложнений?",
    answer:
      "Как любое хирургическое вмешательство, эндопротезирование имеет определённые риски: инфекция (менее 1%), тромбоз, вывих импланта. Однако при современных методиках, использовании системы MAKO и соблюдении протоколов профилактики эти риски сведены к минимуму.",
  },
  {
    question: "Можно ли обойтись без операции?",
    answer:
      "На ранних стадиях артроза применяется консервативное лечение: медикаменты, физиотерапия, инъекции, ЛФК. На консультации врач честно оценит состояние вашего сустава и скажет, какие варианты возможны. Операция рекомендуется, когда консервативное лечение перестаёт помогать и боль существенно снижает качество жизни.",
  },
  {
    question: "Нужна ли специальная подготовка?",
    answer:
      "Да, перед операцией проводится обследование: анализы, ЭКГ, консультации терапевта и анестезиолога. Рекомендуется заранее укрепить мышцы ног специальными упражнениями — это ускорит восстановление. Врач даст подробные рекомендации на консультации.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
            <h2 id="faq-heading">Частые вопросы</h2>
            <p className="mt-4 text-muted-foreground">
              Ответы на вопросы, которые чаще всего задают пациенты
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-8 text-center text-muted-foreground">
              Остались вопросы?{" "}
              <a
                href="#appointment"
                className="text-primary font-medium hover:underline"
              >
                Запишитесь на консультацию
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
