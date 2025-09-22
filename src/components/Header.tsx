import { Menu } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface NavItem {
  name: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
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
            >
              {/* Main Name Container */}
              <div className="relative">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide whitespace-nowrap group-hover:tracking-wider transition-all duration-300">
                  
                  {/* First Name */}
                  <span 
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Biniyam
                  </span>
                  
                  {/* Separator */}
                  <span className="mx-2 md:mx-3 text-yellow-400/50 text-base sm:text-lg">
                    ·
                  </span>
                  
                  {/* Last Name */}
                  <span 
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Abera
                  </span>
                </div>
                
                {/* Tagline */}
                <div className="hidden sm:block text-xs text-yellow-400/70 tracking-[0.2em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Developer & Creator
                </div>
                
                {/* Subtle Underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" role="navigation">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-yellow-400 transition-all duration-300 ease-out group focus:outline-none focus:ring-2 focus:ring-yellow-400/30 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span className="relative z-10 tracking-wide">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/8 to-yellow-400/0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 sm:p-3 text-gray-300 hover:text-yellow-400 transition-all duration-300 group touch-manipulation focus:outline-none focus:ring-2 focus:ring-yellow-400/30 rounded-lg flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="absolute inset-0 bg-yellow-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out" />
              <div className="relative z-10">
                <Menu size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 ease-out" />
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 top-16 sm:top-18 lg:top-20 z-40"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(false);
            }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            
            {/* Right Side Menu */}
            <div 
              className={`absolute right-0 top-0 h-full w-64 sm:w-72 bg-black/80 backdrop-blur-md border-l border-yellow-500/20 shadow-xl transition-all duration-300 ease-out ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              onClick={(e) => e.stopPropagation()}
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
                        isMenuOpen ? 'animate-fade-in-up' : ''
                      }`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      <span className="relative z-10 text-base tracking-wide">{item.name}</span>
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

      {/* Simple Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Touch Experience */
        @media (hover: none) and (pointer: coarse) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(250, 204, 21, 0.25);
          }
          
          button:active {
            transform: scale(0.98);
          }
        }
        
        /* Focus Styles */
        .focus\\:ring-2:focus {
          box-shadow: 0 0 0 2px var(--tw-ring-color);
        }
      `}</style>
    </>
  );
}