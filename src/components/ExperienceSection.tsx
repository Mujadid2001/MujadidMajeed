import { motion } from "framer-motion";
import { Briefcase, Zap, Shield, Rocket } from "lucide-react";

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
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
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
          className="glass-card rounded-xl p-8 md:p-10 glow-cyan max-w-4xl"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h3 className="font-mono text-xl font-bold text-foreground">
                Freelance Software Developer
              </h3>
              <p className="text-muted-foreground text-sm mt-1">Self-Employed · Remote</p>
            </div>
            <span className="font-mono text-xs text-primary mt-2 md:mt-0 border border-primary/30 px-3 py-1 rounded-full">
              March 2023 — Present
            </span>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 p-2 rounded-lg bg-muted">
                  <Icon size={16} className="text-primary" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
