"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problems", label: "Симптомы" },
  { href: "#doctor", label: "О враче" },
  { href: "#mako", label: "MAKO" },
  { href: "#process", label: "Этапы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 sm:h-18 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <span className="sr-only">На главную - </span>
          Др. Искаков
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                activeSection === link.href
                  ? "text-primary bg-primary/15 border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone button - desktop */}
          <Button
            asChild
            size="sm"
            className="hidden sm:flex btn-primary h-10"
          >
            <a href="tel:+77779951921">
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">+7 (777) 995-19-21</span>
              <span className="md:hidden">Позвонить</span>
            </a>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-2 mt-8" aria-label="Мобильная навигация">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                      activeSection === link.href
                        ? "text-primary bg-primary/15 border-l-2 border-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t space-y-3">
                  <Button asChild className="w-full btn-primary h-12">
                    <a href="tel:+77779951921">
                      <Phone className="mr-2 h-5 w-5" />
                      +7 (777) 995-19-21
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-12 border-green-500 text-green-600">
                    <a
                      href="https://wa.me/77779951921"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
