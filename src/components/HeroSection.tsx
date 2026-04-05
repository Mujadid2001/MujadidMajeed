import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Code, Zap, Bot, Cpu, Sparkles, Volume2 } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";
import FloatingParticles from "./FloatingParticles";
import RevealText from "./RevealText";

const HeroSection = () => {
  const mousePosition = useMousePosition();
  const [hasSpoken, setHasSpoken] = useState(false);

  useEffect(() => {
    // Auto-play voice after typewriter animation completes (delay: 0.7 + 30*0.05 = 2.2s)
    const timer = setTimeout(() => {
      if (!hasSpoken && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Full Stack Web and App Developer');
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.onend = () => setHasSpoken(true);
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [hasSpoken]);
  
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Particles Background - Reduced count for performance */}
      <FloatingParticles count={15} color="primary" opacity={0.08} />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0], 
          x: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ y: [30, 0, 30], x: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between max-w-7xl mx-auto">
          {/* Left: Profile Image with Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex flex-col items-center z-10 lg:order-first lg:ml-24"
          >
            {/* Glowing background orb */}
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8], rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10"
            />
            
            {/* Rotating outer border - larger */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border"
            />

            {/* Second rotating border */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96 rounded-full border border-primary/30"
            />

            {/* Profile Image Container */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: mousePosition.x * 0.02,
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-500 mb-8"
              style={{
                boxShadow: "0 0 50px rgba(0, 255, 255, 0.7), 0 0 100px rgba(0, 100, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.3)",
              }}
            >
              {/* Profile Image */}
              <motion.img
                src="/pic1 (1).png"
                alt="Mujadid Majeed"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{ opacity: [0, 0.25, 0], x: [-150, 400, -150] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Glow ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400"
                animate={{ boxShadow: ["0 0 15px rgba(0, 255, 255, 0.5)", "0 0 35px rgba(0, 255, 255, 1)", "0 0 15px rgba(0, 255, 255, 0.5)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center relative"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
                <RevealText text="MUJADID" delay={0.8} stagger={0.08} className="text-foreground inline-block" />
                <br />
                <RevealText text="MAJEED" delay={1.4} stagger={0.08} className="text-primary text-glow-cyan inline-block" />
              </h1>
              
              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mt-4"
                initial={{ scaleX: 0, width: 0 }}
                animate={{ scaleX: 1, width: "200px" }}
                transition={{ delay: 2, duration: 0.8 }}
              />
            </motion.div>

            {/* Orbiting elements around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/60"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary/60"
              />
            </motion.div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [5, -5, 5], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 glass-card rounded-full px-6 py-2 whitespace-nowrap"
              style={{
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="font-mono text-xs text-primary">Available for Work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="z-10 lg:order-last">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.span 
                className="w-3 h-3 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Terminal-style subtitle with digital typewriter animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-lg md:text-2xl lg:text-3xl font-bold mb-8 flex flex-wrap items-center gap-0 relative px-4 sm:px-0 overflow-hidden"
              style={{ wordBreak: "break-word" }}
            >
              {/* Digital glow effect background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-lg blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.span 
                className="inline-flex relative z-10 flex-wrap gap-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {(() => {
                  const text = "Full Stack Web & App Developer";
                  let charIndex = 0;
                  return text.split(/(\s)/).map((word, wordIndex) => (
                    <span key={`word-${wordIndex}`} style={{ whiteSpace: "nowrap" }}>
                      {Array.from(word).map((char, charInWordIndex) => {
                        const currentIndex = charIndex;
                        charIndex++;
                        return (
                          <motion.span
                            key={`${wordIndex}-${charInWordIndex}`}
                            initial={{ 
                              opacity: 0, 
                              scale: 0.5,
                              x: -20,
                              y: 10,
                              rotateZ: -15,
                              filter: "blur(6px) brightness(0.5)"
                            }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              x: 0,
                              y: 0,
                              rotateZ: 0,
                              filter: "blur(0px) brightness(1)"
                            }}
                            transition={{ 
                              delay: 0.7 + currentIndex * 0.05,
                              duration: 0.35,
                              ease: "backOut",
                              type: "spring",
                              stiffness: 180,
                              damping: 14
                            }}
                            style={{ 
                              display: "inline-block",
                              minWidth: char === " " ? "0.5em" : "auto",
                              background: char === " " ? "none" : "linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #ff006e 100%)",
                              backgroundClip: char === " " ? "unset" : "text",
                              WebkitBackgroundClip: char === " " ? "unset" : "text",
                              color: char === " " ? "transparent" : "transparent",
                              textShadow: char === " " ? "none" : "0 0 20px rgba(0, 255, 136, 0.8), 0 0 40px rgba(0, 212, 255, 0.4), 0 0 60px rgba(255, 0, 110, 0.3)",
                              filter: char === " " ? "none" : `drop-shadow(0 0 10px rgba(0, 255, 136, 0.6)) drop-shadow(0 0 25px rgba(0, 212, 255, 0.4))`,
                              fontWeight: "900",
                              letterSpacing: "0.04em"
                            }}
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                    </span>
                  ));
                })()}
              </motion.span>
              
              {/* Active typing cursor - moves with characters */}
              <motion.span 
                className="text-primary font-black text-2xl md:text-3xl relative z-10 inline-block"
                animate={{ 
                  opacity: [1, 0.8, 1],
                  x: [0, 220],
                  textShadow: [
                    "0 0 15px rgba(0, 255, 136, 1), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(255, 0, 110, 0.4)",
                    "0 0 25px rgba(0, 255, 136, 0.8), 0 0 50px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.3)",
                    "0 0 15px rgba(0, 255, 136, 1), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(255, 0, 110, 0.4)"
                  ]
                }}
                transition={{ 
                  x: {
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.7
                  },
                  opacity: {
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0.7,
                    repeatDelay: 0.2
                  },
                  textShadow: {
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0.7,
                    repeatDelay: 0.2
                  }
                }}
              >
                ▌
              </motion.span>
            </motion.div>

            {/* Description with Highlighted Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="max-w-2xl mb-10"
            >
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                Building production-grade systems with cutting-edge technologies and AI-powered solutions.
              </p>

              {/* Highlighted Tech Stack */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {/* Python */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/5 flex items-center gap-2 group cursor-default hover:border-primary/60 hover:bg-primary/10 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                  <span className="font-mono text-xs md:text-sm text-primary font-semibold">Python</span>
                </motion.div>

                {/* Django */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 }}
                  className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/5 flex items-center gap-2 group cursor-default hover:border-primary/60 hover:bg-primary/10 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                  <span className="font-mono text-xs md:text-sm text-primary font-semibold">Django</span>
                </motion.div>

                {/* React */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="px-3 py-2 rounded-lg border border-secondary/30 bg-secondary/5 flex items-center gap-2 group cursor-default hover:border-secondary/60 hover:bg-secondary/10 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></span>
                  <span className="font-mono text-xs md:text-sm text-secondary font-semibold">React</span>
                </motion.div>

                {/* AI/ML - Special Highlight with Robot Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.05, type: "spring", stiffness: 200 }}
                  className="relative px-4 py-2 rounded-lg border-2 border-amber-500/60 bg-gradient-to-r from-amber-500/20 to-orange-500/10 flex items-center gap-3 group cursor-default hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all col-span-1 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated background glow for AI badge */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/20 rounded-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Robot Icon with pulse */}
                  <motion.div
                    animate={{ 
                      y: [0, -4, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Bot size={16} className="text-amber-400" />
                  </motion.div>
                  
                  <span className="font-mono text-xs md:text-sm font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent relative z-10 flex items-center gap-1">
                    AI/ML
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles size={12} className="text-amber-400" />
                    </motion.span>
                  </span>
                </motion.div>

                {/* Animated Neural Network Nodes */}
                <motion.div
                  className="absolute right-0 top-0 w-32 h-32 opacity-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1.2 }}
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-amber-400"
                      animate={{
                        x: [0, Math.cos(i * 72 * Math.PI / 180) * 20, 0],
                        y: [0, Math.sin(i * 72 * Math.PI / 180) * 20, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}
                </motion.div>
              </div>



              </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(187 100% 45% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold glow-cyan transition-all"
              >
                <Mail size={16} />
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, borderColor: "hsl(187 100% 45%)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-mono text-sm font-semibold transition-colors"
              >
                <Code size={16} />
                View Projects
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Mail, href: "mailto:mujadid2001@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={label}
                  whileHover={{ scale: 1.3, rotate: 10, color: "hsl(187 100% 45%)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

