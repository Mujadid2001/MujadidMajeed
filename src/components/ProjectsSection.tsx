import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import { detailedProjects } from "@/data/projectsData";

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Floating Particles Background - Reduced for performance */}
      <FloatingParticles count={15} color="primary" opacity={0.08} />
      
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Key <span className="text-primary text-glow-cyan">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
          {detailedProjects.map((project, i) => {
            const Icon = project.icon;
            const isSecondary = project.accent === "secondary";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden cursor-pointer group"
              >
                <motion.button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full h-full text-left"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`w-full rounded-xl glass-card overflow-hidden transition-all duration-500 h-full`}
                    whileHover={{
                      boxShadow: isSecondary 
                        ? "0 0 40px 10px rgba(255, 165, 0, 0.3)" 
                        : "0 0 50px 15px rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    {project.image && (
                      <div className="relative h-48 overflow-hidden bg-gradient-to-b from-muted to-background">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23222' width='400' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' fill='%23666'%3EProject Screenshot%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col h-48">
                      <div className="flex gap-3 mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg ${isSecondary ? "bg-secondary/10" : "bg-primary/10"}`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon size={20} className={isSecondary ? "text-secondary" : "text-primary"} />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-mono text-base font-bold text-foreground leading-tight">
                            {project.title}
                          </h3>
                          <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                        </div>
                        <motion.div
                          className={`p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                            isSecondary ? "text-secondary" : "text-primary"
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t: string) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-xs font-mono border ${
                              isSecondary
                                ? "border-secondary/20 text-secondary/80"
                                : "border-primary/20 text-primary/80"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 rounded text-xs font-mono border border-muted-foreground/20 text-muted-foreground/60">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed flex-1">
                        {project.highlights.slice(0, 2).map((h: string, j: number) => (
                          <motion.li 
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                            className="flex gap-2"
                          >
                            <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${isSecondary ? "bg-secondary/60" : "bg-primary/60"}`} />
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className={`h-px bg-gradient-to-r ${isSecondary ? "from-secondary to-orange-500" : "from-cyan-500 to-blue-500"} mt-4`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
