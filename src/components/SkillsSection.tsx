import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: "⚡",
    skills: ["Django", "Django REST", "Node.js", "Celery", "WebSockets"],
  },
  {
    title: "Frontend",
    icon: "◻",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Zustand"],
  },
  {
    title: "Databases",
    icon: "⬡",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    title: "AI / ML",
    icon: "◎",
    skills: ["OpenCV", "dlib", "NumPy", "Pandas", "CNN"],
  },
  {
    title: "DevOps",
    icon: "▲",
    skills: ["Docker", "Nginx", "AWS", "Git", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Skills & <span className="text-primary text-glow-cyan">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-primary group-hover:text-glow-cyan transition-all">
                  {cat.icon}
                </span>
                <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-muted text-muted-foreground font-mono text-xs border border-border hover:border-primary/40 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
