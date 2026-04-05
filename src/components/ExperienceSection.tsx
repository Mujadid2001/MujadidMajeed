import { motion } from "framer-motion";
import { Briefcase, Zap, Shield, Rocket } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import RevealText from "./RevealText";

const highlights = [
  {
    icon: Rocket,
    text: "Built face recognition, hotel booking engine, SOAP microservices, live streaming apps, and cross-platform mobile apps",
  },
  {
    icon: Zap,
    text: "ML startup: 30s → 2s. WebSocket responses under 100ms. Storage costs reduced by 70%",
  },
  {
    icon: Shield,
    text: "JWT auth, role-based access, proper authorization — users only see what they should",
  },
  {
    icon: Briefcase,
    text: "Self-managed deployments with Docker, Nginx, AWS, and CI/CD pipelines",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Floating Particles - Reduced for performance */}
      <FloatingParticles count={10} color="primary" opacity={0.08} />
      
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center w-full relative z-10"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Professional <span className="text-primary text-glow-cyan">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 0 60px hsl(187 100% 45% / 0.25)" }}
          className="glass-card rounded-xl p-8 md:p-10 glow-cyan max-w-4xl transition-all duration-500 relative z-10"
        >
          {/* Header */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-border/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div>
              <h3 className="font-mono text-xl font-bold text-foreground">
                Freelance Software Developer
              </h3>
              <p className="text-muted-foreground text-sm mt-1">Self-Employed · Remote</p>
            </div>
            <motion.span 
              className="font-mono text-xs text-primary mt-4 md:mt-0 border border-primary/30 px-3 py-1 rounded-full"
              animate={{ boxShadow: ["0 0 10px hsl(187 100% 45% / 0)", "0 0 20px hsl(187 100% 45% / 0.3)", "0 0 10px hsl(187 100% 45% / 0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              March 2023 — Present
            </motion.span>
          </motion.div>

          {/* Highlights with staggered animation */}
          <div className="space-y-6">
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8, color: "hsl(187 100% 45%)" }}
                className="flex gap-4 items-start cursor-pointer transition-colors"
              >
                <motion.div 
                  className="mt-1 p-2 rounded-lg bg-muted shrink-0"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon size={16} className="text-primary" />
                </motion.div>
                <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line animation */}
          <motion.div
            className="mt-8 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
