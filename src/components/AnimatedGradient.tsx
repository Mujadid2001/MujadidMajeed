import { motion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
  animate?: boolean;
}

export const AnimatedGradient = ({ className = "", animate = true }: AnimatedGradientProps) => {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={animate ? {
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundSize: "200% 200%",
        background: "linear-gradient(-45deg, rgba(0,255,255,0.1), rgba(255,165,0,0.1), rgba(100,255,218,0.1), rgba(255,165,0,0.1))",
      }}
    />
  );
};

export default AnimatedGradient;
