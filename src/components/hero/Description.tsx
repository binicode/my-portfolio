import { motion } from "framer-motion";


export function Description() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="space-y-4"
      aria-label="Hero description"
    >
      <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
        Frontend finesse with{" "}
        <strong className="text-yellow-400 font-semibold">React</strong> and{" "}
        <strong className="text-yellow-400 font-semibold">Tailwind CSS</strong>.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
        Responsive, optimized, and thoughtfully designed—every interface delivers seamless experiences across devices.
      </p>
    </motion.div>
  );
}