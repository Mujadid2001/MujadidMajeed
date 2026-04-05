import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredRevealProps {
  children: ReactNode[];
  delay?: number;
  stagger?: number;
}

export const StaggeredReveal = ({ children, delay = 0, stagger = 0.1 }: StaggeredRevealProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
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
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children) &&
        children.map((child, i) => (
          <motion.div key={i} variants={item}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
};

export default StaggeredReveal;
