import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  color?: "cyan" | "amber" | "green";
  delay?: number;
}

const AnimatedProgressBar = ({
  label,
  percentage,
  color = "cyan",
  delay = 0,
}: AnimatedProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorClasses = {
    cyan: "from-cyan-500 to-blue-500",
    amber: "from-amber-500 to-orange-500",
    green: "from-green-500 to-emerald-500",
  };

  const glowClasses = {
    cyan: "shadow-lg shadow-cyan-500/50",
    amber: "shadow-lg shadow-amber-500/50",
    green: "shadow-lg shadow-green-500/50",
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-semibold text-foreground">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="font-mono text-xs text-primary"
        >
          {Math.round(percentage)}%
        </motion.span>
      </div>

      <div className="relative h-2 bg-muted rounded-full overflow-hidden border border-border/50">
        {/* Main progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : {}}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: "easeOut",
          }}
          className={`h-full bg-gradient-to-r ${colorClasses[color]} rounded-full ${glowClasses[color]} relative overflow-hidden`}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
