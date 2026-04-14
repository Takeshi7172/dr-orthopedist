"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    value: "Проспект Мангилик Ел, 80",
    subtext: "Больница МЦ УДП РК, г. Астана",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (777) 995-19-21",
    href: "tel:+77779951921",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+7 (777) 995-19-21",
    href: "https://wa.me/77779951921",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Часы приёма",
    value: "По предварительной записи",
    subtext: "Пн–Пт: 9:00 – 18:00",
  },
];

export function ContactsSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
    const text = encodeURIComponent(
      `Здравствуйте! Меня зовут ${name}, телефон: ${phone}.${message ? ` ${message}` : ""} Хочу записаться на консультацию.`
    );
    window.open(`https://wa.me/77779951921?text=${text}`, "_blank");
  };

  return (
    <section id="contacts" className="section bg-muted/30" aria-labelledby="contacts-heading">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="contacts-heading">Контакты</h2>
            <p className="mt-4 text-muted-foreground">
              Свяжитесь с нами удобным способом для записи на консультацию
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={100}>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className={`card-hover ${item.highlight ? "border-green-200 bg-green-50/50" : ""}`}
                >
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.highlight ? "bg-green-100" : "bg-primary/10"
                    }`}>
                      <item.icon className={`h-6 w-6 ${item.highlight ? "text-green-600" : "text-primary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`font-semibold hover:underline truncate block ${
                            item.highlight ? "text-green-700" : "hover:text-primary"
                          }`}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold truncate">{item.value}</p>
                      )}
                      {item.subtext && (
                        <p className="text-sm text-muted-foreground">{item.subtext}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="overflow-hidden">
                <div className="h-48 sm:h-56 bg-muted">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=71.446700%2C51.128201&z=16&pt=71.446700,51.128201,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Карта клиники"
                    className="w-full h-full"
                  />
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Appointment Form */}
          <AnimatedSection delay={200}>
            <Card id="appointment" className="border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Записаться на прием</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Прием по предварительной записи. Свяжитесь с нами — ответим в течение дня.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Как к вам обращаться?"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Сообщение{" "}
                      <span className="text-muted-foreground font-normal">(необязательно)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Кратко опишите вашу ситуацию"
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 btn-primary gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Записаться через WhatsApp
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="underline hover:text-primary">
                      политикой обработки данных
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
