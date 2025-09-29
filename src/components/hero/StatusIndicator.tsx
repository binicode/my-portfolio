import { motion } from "framer-motion";

export function StatusIndicator() {
  return (
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
  );
}