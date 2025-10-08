import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Code2, Mail } from "lucide-react";

export function HeroButtons({
  scrollToSection,
}: {
  scrollToSection: (href: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.3 }}
      className="flex flex-col sm:flex-row gap-4 pt-4"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          aria-label="Explore my projects"
          onClick={() => scrollToSection("#projects")}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-6 text-lg rounded-xl shadow-xl shadow-yellow-400/25 border border-yellow-400/30 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Code2 className="w-5 h-5" aria-hidden="true" />
            <span>Explore My Projects</span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          aria-label="Contact me"
          onClick={() => scrollToSection("#contact")}
          variant="outline"
          className="border-2 border-yellow-500 text-[#fbbf24] bg-[#111827] hover:bg-yellow-500/10 hover:border-yellow-400 px-8 py-6 text-lg rounded-xl backdrop-blur-sm relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-yellow-400/40 shadow-md hover:shadow-yellow-400/30 transition-shadow duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#fbbf24]" aria-hidden="true" />
            <span>Hire Me</span>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
