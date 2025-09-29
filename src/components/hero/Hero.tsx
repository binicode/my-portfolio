import { useEffect, useState, useMemo } from "react";
import { AnimatedGridBackground } from "./AnimatedGridBackground";
import { FloatingParticles } from "./FloatingParticles";
import { FloatingCodeSnippets } from "./FloatingCodeSnippets";
import { DynamicGlowEffect } from "./DynamicGlowEffect";
import { HeroLeftContent } from "./HeroLeftContent";
import { HeroRightContent } from "./HeroRightContent";
import { ScrollIndicator } from "./ScrollIndicator";

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

  const codeSnippets = useMemo(
    () => [
      "const developer = 'Biniyam';",
      "export function createUI() {",
      "return <App />;",
      "async function fetchData() {",
      "useState(initialValue);",
    ],
    []
  );

  return (
    <section
      id="home"
      role="region"
      aria-label="main-heading"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <AnimatedGridBackground mousePosition={mousePosition} />

      {!prefersReducedMotion && (
        <>
          <FloatingCodeSnippets codeSnippets={codeSnippets} />
          <FloatingParticles particles={particles} />
          <DynamicGlowEffect mousePosition={mousePosition} />
        </>
      )}

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          <HeroLeftContent scrollToSection={scrollToSection} />
          <HeroRightContent />
        </div>
        <ScrollIndicator scrollToSection={scrollToSection} />
      </div>
    </section>
  );
}
