import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}

export const RevealText = ({ text, delay = 0, stagger = 0.05, className = "" }: RevealTextProps) => {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.320, 1],
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {characters.map((char, i) => (
        <motion.span key={i} variants={charVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RevealText;
