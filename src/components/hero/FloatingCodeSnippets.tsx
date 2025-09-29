import { motion } from "framer-motion";

export function FloatingCodeSnippets({ codeSnippets }: { codeSnippets: string[] }) {
  return (
    <>
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
    </>
  );
}