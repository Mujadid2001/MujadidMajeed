import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  opacity?: number;
}

export const FloatingParticles = ({ count = 20, color = "primary", opacity = 0.15 }: FloatingParticlesProps) => {
  // Memoize particles array to prevent recalculations
  const particles = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-${color}`}
          style={{ opacity, willChange: "transform" }}
          animate={{
            x: [Math.random() * 100 - 50, Math.random() * 300 - 150, Math.random() * 100 - 50],
            y: [Math.random() * 100 - 50, Math.random() * 300 - 150, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
