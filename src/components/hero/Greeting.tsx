import { motion } from "framer-motion";

export function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      aria-label="Hero greeting"
    >
      <p className="text-yellow-400 text-lg font-medium mb-2">Hi, I&apos;m</p>
    </motion.div>
  );
}
