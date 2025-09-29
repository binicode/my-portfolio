import { motion } from "framer-motion";

export function Description() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="space-y-4"
    >
      <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
        Frontend finesse with{" "}
        <span className="text-yellow-400 font-semibold">React</span> and{" "}
        <span className="text-yellow-400 font-semibold">Tailwind CSS</span>.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
        Turning ideas into intuitive interfaces. Every component is crafted for clarity, responsiveness, and visual impact.
      </p>
    </motion.div>
  );
}