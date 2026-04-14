import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "#doctor", label: "О враче" },
  { href: "#mako", label: "Технология MAKO" },
  { href: "#process", label: "Этапы лечения" },
  { href: "#faq", label: "Вопросы" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="container py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-semibold text-primary">
              Др. Искаков
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Эндопротезирование коленного и тазобедренного суставов
              с использованием системы MAKO
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Навигация</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+77779951921"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +7 (777) 995-19-21
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/77779951921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Проспект Мангилик Ел, 80, г. Астана</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Приём по предварительной записи</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Искаков Б.С. Все права защищены</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
