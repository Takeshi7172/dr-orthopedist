"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "77779951921";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу записаться на консультацию к доктору Искакову."
);

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center",
        "rounded-full bg-green-500 text-white shadow-xl",
        "transition-all duration-300 hover:scale-110 hover:bg-green-600",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
        "float-bounce",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Написать в WhatsApp"
    >
      {/* Enhanced pulse effect */}
      <span className="absolute inset-[-4px] rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="absolute inset-[-8px] rounded-full bg-green-400 animate-pulse opacity-20" />

      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 relative z-10" />
    </a>
  );
}
