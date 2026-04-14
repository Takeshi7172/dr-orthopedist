"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Айгуль К.",
    age: "58 лет",
    operation: "Коленный сустав",
    text: "После операции у доктора Искакова я снова могу подниматься по лестнице без боли. Очень благодарна за внимательное отношение и профессионализм. Всё было объяснено понятно, без лишних медицинских терминов.",
    rating: 5,
    verified: true,
  },
  {
    name: "Сергей М.",
    age: "64 года",
    operation: "Тазобедренный сустав",
    text: "Долго не решался на операцию, боялся. Но доктор всё подробно объяснил, показал на снимках. Прошло 6 месяцев — хожу без трости, боли нет. Жалею, что не сделал раньше.",
    rating: 5,
    verified: true,
  },
  {
    name: "Наталья В.",
    age: "52 года",
    operation: "Коленный сустав",
    text: "Отличный хирург! Операция прошла хорошо, реабилитация — по плану. Через 2 месяца вернулась к обычной жизни. Отдельное спасибо за поддержку на всех этапах.",
    rating: 5,
    verified: true,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h2 id="testimonials-heading">Отзывы пациентов</h2>
            <p className="mt-4 text-muted-foreground">
              Реальные истории людей, которые прошли через эндопротезирование
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="h-full card-hover relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />

                <CardContent className="pt-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" />

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="flex-1 text-muted-foreground italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.age} &middot; {testimonial.operation}
                      </p>
                    </div>
                    {testimonial.verified && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        Проверено
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Отзывы реальных пациентов. Публикуются с их письменного согласия.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
