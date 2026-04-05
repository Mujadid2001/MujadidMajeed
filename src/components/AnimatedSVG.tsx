import { motion, SVGMotionProps } from "framer-motion";

interface AnimatedCircleProps extends SVGMotionProps<SVGCircleElement> {
  delay?: number;
  duration?: number;
}

export const AnimatedCircle = ({ delay = 0, duration = 3, ...props }: AnimatedCircleProps) => {
  return (
    <motion.circle
      animate={{ r: [5, 8, 5], opacity: [0.8, 0.4, 0.8] }}
      transition={{ duration, repeat: Infinity, delay }}
      {...props}
    />
  );
};

interface AnimatedPathProps extends SVGMotionProps<SVGPathElement> {
  delay?: number;
  duration?: number;
}

export const AnimatedPath = ({ delay = 0, duration = 3, ...props }: AnimatedPathProps) => {
  return (
    <motion.path
      animate={{ 
        strokeDashoffset: [1000, 0],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ duration, repeat: Infinity, delay }}
      {...props}
    />
  );
};

export default { AnimatedCircle, AnimatedPath };
