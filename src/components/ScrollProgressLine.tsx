import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollProgressLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
      
      // Random glitch effect
      if (Math.random() < 0.02) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create hexadecimal representation of progress
  const hexProgress = Math.floor(scrollProgress * 255).toString(16).padStart(2, '0').toUpperCase();
  
  // Create segment bars (like VU meter)
  const segments = Math.ceil(scrollProgress / 5);

  return (
    <div className="fixed left-0 top-0 w-1 h-full pointer-events-none z-40">
      {/* Base line with enhanced glow */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20"
        style={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2)" }}
      />

      {/* VU Meter segments */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`segment-${i}`}
          className="absolute left-0 w-full h-1"
          style={{
            top: `${(i / 20) * 100}%`,
            background: i < segments ? "rgba(0, 255, 255, 0.6)" : "rgba(0, 255, 255, 0.1)",
          }}
          animate={i < segments ? { 
            boxShadow: [
              "0 0 10px rgba(0, 255, 255, 0.5)",
              "0 0 20px rgba(0, 255, 255, 1)",
              "0 0 10px rgba(0, 255, 255, 0.5)"
            ]
          } : {}}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
        />
      ))}

      {/* Growing progress line */}
      <motion.div
        className="absolute left-0 top-0 w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
        style={{
          height: `${scrollProgress}%`,
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.9), 0 0 40px rgba(0, 100, 255, 0.7), inset 0 0 10px rgba(0, 255, 255, 0.5)",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)",
          height: `${scrollProgress}%`,
        }}
      />

      {/* Main progress indicator dot */}
      <motion.div
        className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-cyan-300 ${showGlitch ? 'animate-pulse' : ''}`}
        style={{
          top: `${scrollProgress}%`,
          boxShadow: "0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 100, 255, 0.8), inset 0 0 8px rgba(255, 255, 255, 0.5)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          boxShadow: [
            "0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 100, 255, 0.8), inset 0 0 8px rgba(255, 255, 255, 0.5)",
            "0 0 30px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 100, 255, 1), inset 0 0 12px rgba(255, 255, 255, 0.8)",
            "0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 100, 255, 0.8), inset 0 0 8px rgba(255, 255, 255, 0.5)",
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      />

      {/* Checkpoint markers */}
      {[0, 25, 50, 75, 100].map((checkpoint) => (
        <motion.div
          key={`checkpoint-${checkpoint}`}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: `${checkpoint}%` }}
          animate={scrollProgress >= checkpoint ? {
            opacity: [0.3, 1, 0.3],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="text-xs font-mono text-cyan-500 whitespace-nowrap -left-12 relative opacity-40 pointer-events-none">
            [0x{(checkpoint * 2.55).toString(16).padStart(2, '0').toUpperCase()}]
          </div>
        </motion.div>
      ))}

      {/* Terminal code display */}
      <motion.div
        className="absolute left-3 top-0 text-primary text-xs font-mono pointer-events-none"
        style={{ height: `${scrollProgress}%`, overflow: "hidden" }}
      >
        <div className="whitespace-nowrap opacity-30 leading-tight">
          <div>$ init_renderer()</div>
          <div>→ 0x{hexProgress}</div>
          <div>✓ {Math.round(scrollProgress)}%</div>
          <div>↻ {Math.floor(window.scrollY)}px</div>
          <div className="text-secondary">// complete</div>
        </div>
      </motion.div>

      {/* Glitch effect visual */}
      {showGlitch && (
        <motion.div
          className="absolute left-0 top-0 w-full h-1 bg-cyan-300"
          style={{
            height: `${scrollProgress}%`,
            boxShadow: "0 0 30px rgba(0, 255, 255, 1), 2px 2px 10px rgba(255, 0, 255, 0.8)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Branch points (breakpoints) */}
      {scrollProgress > 0 && Math.random() > 0.7 && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 h-4"
          style={{
            top: `${scrollProgress - 2}%`,
            background: "linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.8), transparent)",
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.9), -3px 0 10px rgba(0, 255, 255, 0.6), 3px 0 10px rgba(0, 255, 255, 0.6)",
          }}
        />
      )}

      {/* Data stream particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-cyan-400 rounded-full"
          style={{ top: `${scrollProgress * (0.8 + i * 0.1)}%` }}
          animate={{
            x: [0, Math.sin(i) * 5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default ScrollProgressLine;
