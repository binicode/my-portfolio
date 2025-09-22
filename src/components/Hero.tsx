import { Button } from "./ui/button";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Braces,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImage from "../assets/profile-picture.jpg";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(particleArray);

    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const codeSnippets = [
    "const developer = 'Biniyam';",
    "export function createUI() {",
    "return <App />;",
    "async function fetchData() {",
    "useState(initialValue);",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,215,0,0.08)_1px,transparent_1px),linear-gradient(rgba(255,215,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
      </div>

      {/* Dynamic glow effect */}
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-yellow-400/15 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.4s ease-out",
        }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-400/20 font-mono text-sm pointer-events-none select-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [-20, -120, -200],
            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "linear",
          }}
          style={{
            left: `${10 + index * 15}%`,
            top: "80%",
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -150, -300],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 lg:pr-8"
          >
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-yellow-400 text-lg font-medium mb-2">
                Hi, I'm
              </p>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl xl:text-8xl leading-tight">
                <motion.span
                  className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent"
                  initial={{ backgroundPosition: "0%" }}
                  animate={{ backgroundPosition: "100%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Biniyam
                </motion.span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1 }}
                className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
              />
            </motion.div>

            {/* Title with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <motion.div
                animate={{
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-yellow-400 text-2xl font-mono"
              >
                &lt;/&gt;
              </motion.div>
              <h2 className="text-2xl lg:text-3xl text-gray-200">
                React Frontend Developer
              </h2>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="space-y-4"
            >
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Frontend finesse with{" "}
                <span className="text-yellow-400 font-semibold">
                  React
                </span>{" "}
                and <span className="text-yellow-400 font-semibold">Tailwind CSS</span>
                .
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Turning ideas into intuitive interfaces. Every component is crafted for clarity, 
                responsiveness, and visual impact.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("#projects")}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-6 text-lg rounded-xl shadow-xl shadow-yellow-400/25 border border-yellow-400/30 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Explore My Projects
                  </span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  className="border-2 border-yellow-400/40 text-amber-400 hover:bg-yellow-400/10 hover:border-yellow-300 px-8 py-6 text-lg rounded-xl backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Hire Me
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex items-center gap-6 pt-8"
            >
              <span className="text-gray-400 text-sm">Connect with me</span>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "#", label: "GitHub" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                  { Icon: Mail, href: "#", label: "Email" },
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="p-2 rounded-lg border border-yellow-400/20 text-gray-400 hover:text-yellow-300 hover:border-yellow-400/40 transition-all duration-300 backdrop-blur-sm group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="space-y-4 lg:pr-8 relative flex justify-center lg:justify-end"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20 rounded-full blur-3xl scale-110" />

            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 border-2 border-yellow-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                width: "120%",
                height: "120%",
                left: "-10%",
                top: "-10%",
              }}
            />

            <motion.div
              className="absolute inset-0 border border-yellow-400/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                width: "140%",
                height: "140%",
                left: "-20%",
                top: "-20%",
              }}
            />

            {/* Floating elements around image */}
            {[
              {
                element: <Braces className="w-5 h-5 text-yellow-400" />,
                position: { top: "10%", right: "10%" },
                delay: 0,
              },
              {
                element: (
                  <span className="text-yellow-400 font-mono text-lg">
                    &lt;/&gt;
                  </span>
                ),
                position: { top: "30%", left: "5%" },
                delay: 0.5,
              },
              {
                element: <Sparkles className="w-5 h-5 text-yellow-400" />,
                position: { bottom: "20%", right: "5%" },
                delay: 1,
              },
              {
                element: (
                  <span className="text-yellow-400 font-mono text-sm">{}</span>
                ),
                position: { bottom: "30%", left: "10%" },
                delay: 1.5,
              },
            ].map(({ element, position, delay }, index) => (
              <motion.div
                key={index}
                className="absolute p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-full backdrop-blur-sm flex items-center justify-center"
                style={position}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: delay + 1 },
                  scale: { delay: delay + 1 },
                  y: { duration: 3, repeat: Infinity, delay: delay },
                }}
              >
                {element}
              </motion.div>
            ))}

            {/* Main profile image */}
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 rounded-full blur-xl opacity-60" />
                <motion.img
                  src={profileImage}
                  alt="Biniyam"
                  className="w-full h-full rounded-full object-cover border-4 border-yellow-400/40 shadow-2xl shadow-yellow-400/20 relative z-10"
                  initial={{ borderRadius: "20%" }}
                  animate={{ borderRadius: "50%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400/60"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="text-yellow-400 hover:text-yellow-300 transition-colors group relative flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <ChevronDown size={24} />
            <motion.div
              className="absolute -inset-3 border border-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
