import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function TitleWithIcons() {
  return (
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
  );
}