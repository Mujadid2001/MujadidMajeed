import { motion, useMotionValue, useTransform, useEffect } from "framer-motion";

interface AnimatedCountProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCount = ({ from, to, duration = 2, delay = 0, suffix = "", className = "" }: AnimatedCountProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = count.set(to);
    return () => {
      // Cleanup if needed
    };
  }, [to, count]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.span>
        {rounded}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

export default AnimatedCount;
