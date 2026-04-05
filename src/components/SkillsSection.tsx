import { motion } from "framer-motion";
import AnimatedProgressBar from "./AnimatedProgressBar";
import TiltCard from "./TiltCard";
import FloatingParticles from "./FloatingParticles";
import RevealText from "./RevealText";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    proficiency: 95,
    color: "cyan" as const,
  },
  {
    title: "Backend",
    icon: "⚡",
    skills: ["Django", "Django REST", "Node.js", "Celery", "WebSockets"],
    proficiency: 90,
    color: "amber" as const,
  },
  {
    title: "Frontend",
    icon: "◻",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Zustand"],
    proficiency: 88,
    color: "cyan" as const,
  },
  {
    title: "Databases",
    icon: "⬡",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
    proficiency: 92,
    color: "amber" as const,
  },
  {
    title: "AI / ML",
    icon: "◎",
    skills: ["OpenCV", "dlib", "NumPy", "Pandas", "CNN"],
    proficiency: 85,
    color: "cyan" as const,
  },
  {
    title: "DevOps",
    icon: "▲",
    skills: ["Docker", "Nginx", "AWS", "Git", "CI/CD"],
    proficiency: 87,
    color: "amber" as const,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Floating Particles - Reduced for performance */}
      <FloatingParticles count={12} color="secondary" opacity={0.06} />
      
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative z-10"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Skills & <span className="text-primary text-glow-cyan">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
          {skillCategories.map((cat, i) => (
            <TiltCard key={cat.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-xl p-8 hover:glow-cyan transition-all duration-500 group h-full"
              >
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-3xl text-primary group-hover:text-glow-cyan transition-all"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {cat.icon}
                </motion.span>
                <h3 className="font-mono text-lg font-semibold text-foreground tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Animated Progress Bar */}
              <div className="mb-6">
                <AnimatedProgressBar
                  label="Proficiency"
                  percentage={cat.proficiency}
                  color={cat.color}
                  delay={i * 0.1}
                />
              </div>

              {/* Skills Pills with Animation */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.15, backgroundColor: "hsl(187 100% 45% / 0.2)" }}
                    className="px-3 py-1.5 rounded-md bg-muted/50 text-muted-foreground font-mono text-xs border border-border/50 hover:border-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
