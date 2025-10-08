import { motion } from "framer-motion";

export function MainHeading() {
  return (
    <motion.div
      id="hero-main-heading"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="space-y-4"
      role="heading"
      aria-level={1}
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
        aria-hidden="true"
      />
    </motion.div>
  );
}
