"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MessageCircle, Calendar, CheckCircle2, ArrowDown } from "lucide-react";

const WHATSAPP_NUMBER = "77779951921";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу записаться на консультацию к доктору Искакову."
);

const highlights = [
  "Более 1000 операций",
  "Система MAKO",
  "Точность 0.5мм",
];

export function HeroSection() {
  const scrollToProblems = () => {
    document.getElementById("problems")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Content - above-the-fold uses CSS animations */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Badge
              variant="secondary"
              className="mb-4 text-sm px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              Эндопротезирование суставов
            </Badge>

            <h1
              id="hero-heading"
              className="font-bold leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
            >
              Вернитесь к жизни{" "}
              <span className="gradient-text">без боли</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Эндопротезирование коленного и тазобедренного сустава с высокой
              точностью и прогнозируемым результатом
            </p>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[400ms]">
              <Button
                size="lg"
                className="btn-primary text-base h-12 px-6 gap-2"
                asChild
              >
                <a href="#appointment">
                  <Calendar className="h-5 w-5" />
                  Записаться на консультацию
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-6 gap-2 border-green-500/50 text-green-600 hover:bg-green-50 hover:border-green-500"
                asChild
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-3 text-sm text-muted-foreground text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[500ms]">
              🕐 Прием по предварительной записи
            </p>
          </div>

          {/* Doctor Card - below fold, uses AnimatedSection */}
          <AnimatedSection delay={200} direction="left" className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

              <div className="relative bg-card rounded-2xl border shadow-xl overflow-hidden">
                <div className="aspect-[4/5]">
                  <img
                    src="/images/doctor-portrait.jpg"
                    alt="Искаков Булат Серикович — хирург-ортопед"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Doctor info */}
                <div className="p-5 sm:p-6 bg-card">
                  <h2 className="text-xl font-semibold">Искаков Булат Серикович</h2>
                  <p className="text-primary font-medium">Хирург-ортопед</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Помогаю пациентам вернуться к активной жизни без постоянной боли
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={600} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={scrollToProblems}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Прокрутить вниз"
          >
            <span className="text-sm">Узнать больше</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
