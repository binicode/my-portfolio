import { Menu } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-xl z-50 border-b border-yellow-500/30 shadow-xl shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 gap-4">
            {/* Elegant Name Logo */}
            <div
              className="relative group cursor-pointer flex-shrink-0 min-w-0 flex-1 md:flex-initial"
              role="banner"
              tabIndex={0}
            >
              <div className="relative">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide whitespace-nowrap group-hover:tracking-wider transition-all duration-300">
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Biniyam
                  </span>
                  <span className="mx-2 md:mx-3 text-yellow-400/50 text-base sm:text-lg">
                    ·
                  </span>
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Abera
                  </span>
                </div>
                <div className="hidden sm:block text-xs text-yellow-400/70 tracking-[0.2em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Developer & Creator
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
              role="navigation"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-out group focus:outline-none focus:ring-2 focus:ring-yellow-400/30 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navigate to ${item.name} section`}
                  tabIndex={0}
                >
                  <span className="relative z-10 tracking-wide">
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/8 to-yellow-400/0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </nav>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden relative p-2 sm:p-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 group touch-manipulation focus:outline-none focus:ring-2 focus:ring-yellow-400/30 rounded-lg flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-yellow-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              <div className="relative z-10">
                <Menu
                  size={20}
                  className="sm:w-6 sm:h-6 transition-transform duration-300 ease-out"
                />
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 top-16 sm:top-18 lg:top-20 z-40"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            {/* Right Side Menu */}
            <div
              ref={menuRef}
              className={`absolute right-0 top-0 h-full w-64 sm:w-72 bg-black/80 backdrop-blur-md border-l border-yellow-500/20 shadow-xl transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
              role="navigation"
              aria-hidden={!isMenuOpen}
            >
              <div className="py-6 px-4">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-3 text-left text-gray-300 hover:text-yellow-400 active:text-yellow-300 transition-all duration-300 ease-out group touch-manipulation focus:outline-none focus:ring-2 focus:ring-yellow-400/30 rounded-lg ${
                        isMenuOpen ? "animate-fade-in-up" : ""
                      } bg-black/70`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                      aria-label={`Navigate to ${item.name} section`}
                      tabIndex={0}
                    >
                      <span className="relative z-10 text-base tracking-wide">
                        {item.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-yellow-400/5 to-transparent rounded-lg scale-x-0 origin-left group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300 ease-out" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      </header>
    </>
  );
}
