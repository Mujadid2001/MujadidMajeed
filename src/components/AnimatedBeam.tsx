import { motion } from "framer-motion";

interface BeamProps {
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  duration?: number;
}

export const AnimatedBeam = ({ position = "top", delay = 0, duration = 3 }: BeamProps) => {
  const getPosition = () => {
    switch (position) {
      case "top":
        return "top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent";
      case "bottom":
        return "bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent";
      case "left":
        return "left-0 top-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-b from-transparent via-primary to-transparent";
      case "right":
        return "right-0 top-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-b from-transparent via-secondary to-transparent";
    }
  };

  return (
    <motion.div
      className={`absolute ${getPosition()}`}
      animate={{
        opacity: [0, 1, 0.5, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        filter: "blur(5px)",
      }}
    />
  );
};

export default AnimatedBeam;
