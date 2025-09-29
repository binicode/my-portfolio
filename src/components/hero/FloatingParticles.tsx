import { motion } from "framer-motion";

type Particle = { id: number; x: number; y: number; delay: number };

export function FloatingParticles({ particles }: { particles: Particle[] }) {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-yellow-400/60 rounded-full pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -150, -300],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
