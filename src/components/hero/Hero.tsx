import { useEffect, useState, useMemo } from "react";
import { AnimatedGridBackground } from "./AnimatedGridBackground";
import { FloatingParticles } from "./FloatingParticles";
import { DynamicGlowEffect } from "./DynamicGlowEffect";
import { HeroLeftContent } from "./HeroLeftContent";
import { HeroRightContent } from "./HeroRightContent";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  useEffect(() => {
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(particleArray);

    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element not found for selector: ${href}`);
    }
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="main-heading"
      className="scroll-mt-24 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/background-image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated background elements */}
      <AnimatedGridBackground />

      {!prefersReducedMotion && (
        <>
          <FloatingParticles particles={particles} />
          <DynamicGlowEffect mousePosition={mousePosition} />
        </>
      )}

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20 pb-24">
          <HeroLeftContent scrollToSection={scrollToSection} />
          <HeroRightContent />
        </div>
      </div>
    </section>
  );
}
