import { motion } from "framer-motion";
import React, {useMemo} from "react";

interface FloatingCodeSnippetsProps {
  codeSnippets: string[];
}


export function FloatingCodeSnippets({ codeSnippets }: FloatingCodeSnippetsProps) {
  // Memoize random positions so they don't change on every render
  const positions = useMemo(
    () =>
      codeSnippets.map((_, index) => ({
        x: Math.random() * 40 - 20,
        y: Math.random() * 80 - 40,
        left: 10 + index * 15,
      })),
    [codeSnippets.length]
  );

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
            x: [0, positions[index].x, positions[index].y],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "linear",
          }}
          style={{
            left: `${positions[index].left}%`,
            top: "80%",
          }}
          aria-hidden="true"
        >
          {snippet}
        </motion.div>
      ))}
    </>
  );
}