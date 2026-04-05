import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FocusGlowInputProps {
  children: ReactNode;
  className?: string;
}

export const FocusGlowInput = ({ children, className = "" }: FocusGlowInputProps) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ borderColor: "transparent" }}
      whileFocus={{ borderColor: "rgba(0, 255, 255, 0.5)" }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-lg pointer-events-none"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {children}
    </motion.div>
  );
};

export default FocusGlowInput;
