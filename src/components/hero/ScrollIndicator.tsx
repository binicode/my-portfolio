import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator({ scrollToSection }: { scrollToSection: (href: string) => void }) {
  return (
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
  );
}