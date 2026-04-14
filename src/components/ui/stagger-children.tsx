"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  initialDelay = 0,
}: StaggerChildrenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={
        {
          "--stagger-delay": `${staggerDelay}ms`,
          "--initial-delay": `${initialDelay}ms`,
        } as React.CSSProperties
      }
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDelay: isVisible
                  ? `${initialDelay + index * staggerDelay}ms`
                  : "0ms",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
