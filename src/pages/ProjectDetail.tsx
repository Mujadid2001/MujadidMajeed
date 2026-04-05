import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { detailedProjects, projectsMap } from "@/data/projectsData";
import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectId ? projectsMap[projectId] : null;

  if (!project) {
    return (
      <div className="relative min-h-screen circuit-grid scanlines">
        <CircuitBackground />
        <Navbar />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="relative min-h-screen circuit-grid scanlines">
      <CircuitBackground />
      <Navbar />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background/80 via-background to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.button
              onClick={() => navigate("/")}
              type="button"
              className="flex items-center gap-2 mb-8 text-primary/70 hover:text-primary transition-colors cursor-pointer"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={18} />
              Back to Projects
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-lg ${project.accent === "secondary" ? "bg-secondary/10" : "bg-primary/10"}`}>
                  <Icon size={32} className={project.accent === "secondary" ? "text-secondary" : "text-primary"} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{project.title}</h1>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
                    {project.period}
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.overview}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1.5 rounded-full text-sm font-mono border ${
                      project.accent === "secondary"
                        ? "border-secondary/20 text-secondary/80 bg-secondary/5"
                        : "border-primary/20 text-primary/80 bg-primary/5"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.fullDescription}</p>
            </motion.div>

            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
              <ProjectGallery 
                images={project.galleryImages} 
                projectTitle={project.title}
                accent={project.accent}
              />
            </motion.div>

            {/* Project Video */}
            {project.video && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Video Demo</h2>
                <motion.div
                  className={`relative rounded-xl overflow-hidden border-2 shadow-2xl flex items-center justify-center max-w-2xl mx-auto ${
                    project.accent === "secondary"
                      ? "border-secondary/30 bg-secondary/5"
                      : "border-primary/30 bg-primary/5"
                  }`}
                  style={{ aspectRatio: "auto" }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 ${
                      project.accent === "secondary"
                        ? "bg-gradient-to-r from-secondary/20 to-transparent"
                        : "bg-gradient-to-r from-primary/20 to-transparent"
                    } pointer-events-none rounded-xl blur-xl -z-10`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <video
                    controls
                    className="max-w-full max-h-[70vh] object-contain"
                    poster={project.image || undefined}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </motion.div>
            )}

            {/* Key Metrics */}
            {project.architecture.metrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.architecture.metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`p-4 rounded-lg border ${
                        project.accent === "secondary"
                          ? "border-secondary/20 bg-secondary/5"
                          : "border-primary/20 bg-primary/5"
                      }`}
                    >
                      <h3 className="font-bold text-foreground mb-3">{metric.label}</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Before:</p>
                          <p className={project.accent === "secondary" ? "text-secondary/80" : "text-primary/80"}>
                            {metric.before}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">After:</p>
                          <p className={project.accent === "secondary" ? "text-secondary/80" : "text-primary/80"}>
                            {metric.after}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-muted-foreground/20">
                          <p className="text-xs text-muted-foreground">Improvement</p>
                          <p className="text-green-500 font-mono font-bold">{metric.improvement}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Architectural Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">System Architecture</h2>

              {/* Architecture Layers */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architecture.layers.map((layer, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-4 rounded-lg border ${
                        project.accent === "secondary"
                          ? "border-secondary/20 bg-secondary/5"
                          : "border-primary/20 bg-primary/5"
                      }`}
                    >
                      <h3
                        className={`font-bold mb-3 ${
                          project.accent === "secondary" ? "text-secondary" : "text-primary"
                        }`}
                      >
                        {layer.name}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Components</p>
                          <ul className="space-y-1">
                            {layer.components.map((comp, j) => (
                              <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {comp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Technologies</p>
                          <div className="flex flex-wrap gap-1">
                            {layer.technologies.map((tech, j) => (
                              <span
                                key={j}
                                className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Data Flow */}
              <div
                className={`p-4 rounded-lg border mb-8 ${
                  project.accent === "secondary"
                    ? "border-secondary/20 bg-secondary/5"
                    : "border-primary/20 bg-primary/5"
                }`}
              >
                <h3 className={`font-bold mb-2 ${project.accent === "secondary" ? "text-secondary" : "text-primary"}`}>
                  Data Flow
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                  {project.architecture.dataFlow}
                </p>
              </div>

              {/* Key Optimizations */}
              <div>
                <h3 className="font-bold text-foreground mb-3">Key Optimizations</h3>
                <ul className="space-y-2">
                  {project.architecture.keyOptimizations.map((opt, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span
                        className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                          project.accent === "secondary" ? "bg-secondary/60" : "bg-primary/60"
                        }`}
                      />
                      <span>{opt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Senior-Level Insights */}
            {project.seniorInsights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Senior-Level Insights</h2>
                <div className="space-y-4">
                  {project.seniorInsights.map((insight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-4 rounded-lg border-l-4 ${
                        project.accent === "secondary"
                          ? "border-l-secondary bg-secondary/5 border border-secondary/20"
                          : "border-l-primary bg-primary/5 border border-primary/20"
                      }`}
                    >
                      <p className="text-muted-foreground leading-relaxed">{insight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${project.accent === "secondary" ? "bg-red-500/60" : "bg-orange-500/60"}`} />
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-orange-500/60 mt-1">⚠</span>
                        <span>{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        project.accent === "secondary" ? "bg-green-500/60" : "bg-cyan-500/60"
                      }`}
                    />
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-green-500/60 mt-1">✓</span>
                        <span>{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Technical Depth */}
            {project.technicalDepth.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Technical Deep Dive</h2>
                <div className="space-y-6">
                  {project.technicalDepth.map((section, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-4 rounded-lg border ${
                        project.accent === "secondary"
                          ? "border-secondary/20 bg-secondary/5"
                          : "border-primary/20 bg-primary/5"
                      }`}
                    >
                      <h3 className={`font-bold mb-4 ${project.accent === "secondary" ? "text-secondary" : "text-primary"}`}>
                        {section.category}
                      </h3>
                      <ul className="space-y-2">
                        {section.details.map((detail, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Related Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {detailedProjects
                  .filter((p) => p.id !== projectId)
                  .slice(0, 3)
                  .map((relatedProject) => {
                    const RelatedIcon = relatedProject.icon;
                    return (
                      <motion.button
                        key={relatedProject.id}
                        onClick={() => navigate(`/project/${relatedProject.id}`)}
                        type="button"
                        className="text-left group w-full cursor-pointer"
                        whileHover={{ y: -5 }}
                      >
                        <div
                          className={`p-4 rounded-lg border transition-all ${
                            relatedProject.accent === "secondary"
                              ? "border-secondary/20 bg-secondary/5 group-hover:border-secondary/40"
                              : "border-primary/20 bg-primary/5 group-hover:border-primary/40"
                          }`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className={`p-2 rounded ${
                                relatedProject.accent === "secondary"
                                  ? "bg-secondary/10"
                                  : "bg-primary/10"
                              }`}
                            >
                              <RelatedIcon
                                size={20}
                                className={
                                  relatedProject.accent === "secondary"
                                    ? "text-secondary"
                                    : "text-primary"
                                }
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                {relatedProject.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">{relatedProject.period}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.highlights[0]}</p>
                        </div>
                      </motion.button>
                    );
                  })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center py-12 border-t border-muted-foreground/20"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Interested in discussing this project?</h3>
              <p className="text-muted-foreground mb-6">Let's connect and explore how these architectural patterns apply to your challenges.</p>
              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={() => navigate("/?section=contact")}
                  className={`px-6 py-3 rounded-lg font-mono transition-all cursor-pointer ${
                    project.accent === "secondary"
                      ? "bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20"
                      : "bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  Get in Touch
                </motion.button>
                <motion.button
                  onClick={() => navigate("/")}
                  type="button"
                  className={`px-6 py-3 rounded-lg font-mono transition-all border cursor-pointer ${
                    project.accent === "secondary"
                      ? "border-secondary/20 text-secondary hover:bg-secondary/10"
                      : "border-primary/20 text-primary hover:bg-primary/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  View All Projects
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
