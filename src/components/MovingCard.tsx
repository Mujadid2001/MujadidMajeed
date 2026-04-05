import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MovingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: "lift" | "glow" | "scale";
  image?: string;
}

const MovingCard = ({
  children,
  delay = 0,
  className = "",
  hoverEffect = "lift",
  image,
}: MovingCardProps) => {
  const hoverVariants = {
    lift: { y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" },
    glow: { boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" },
    scale: { scale: 1.02 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={hoverVariants[hoverEffect]}
      className={`glass-card rounded-xl overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image container if provided */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <motion.img
            src={image}
            alt="Card visual"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 z-10">
        {children}
      </div>

      {/* Bottom accent line animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default MovingCard;
