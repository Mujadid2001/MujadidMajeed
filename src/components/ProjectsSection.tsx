import { motion } from "framer-motion";
import { Brain, BookOpen, Hotel, Smartphone, Tv, CreditCard } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI Facial Recognition Attendance",
    period: "Jan 2025 — Dec 2025",
    tech: ["Python", "Django", "OpenCV", "CNN", "Redis", "WebSockets", "Docker"],
    highlights: [
      "90%+ accuracy with CNN + HOG fallback and CLAHE preprocessing",
      "Streams to 100+ concurrent users without lag",
      "Face matching: 850ms → 180ms via KD-tree indexing",
      "Blink detection anti-spoofing prevents photo fraud",
      "Model init: 30s → 2s through lazy-loading",
    ],
    accent: "primary",
  },
  {
    icon: BookOpen,
    title: "Library Management System (SOA/SOAP)",
    period: "Dec 2024 — Feb 2025",
    tech: ["Python", "SOAP", "WSDL", "REST APIs", "Microservices"],
    highlights: [
      "Refactored monolith into 4 SOAP-based microservices",
      "Role-based access control across services",
      "Cross-service reporting for usage and overdue tracking",
    ],
    accent: "secondary",
  },
  {
    icon: Hotel,
    title: "Hotel Booking Engine",
    period: "Aug 2024 — Nov 2024",
    tech: ["Django", "DRF", "PostgreSQL", "JWT", "DB Transactions"],
    highlights: [
      "No double-booking even with 50 concurrent users",
      "Optimized queries with select_related & prefetch_related",
      "Separate customer/admin APIs with JWT + role checks",
    ],
    accent: "primary",
  },
  {
    icon: Smartphone,
    title: "PocketLibrary Mobile App",
    period: "Jun 2024 — Aug 2024",
    tech: ["React Native", "SQLite", "Django REST", "JWT", "Background Sync"],
    highlights: [
      "Works offline with SQLite, syncs when back online",
      "JWT auth talks to Django backend",
    ],
    accent: "secondary",
  },
  {
    icon: Tv,
    title: "Live Streaming Platform",
    period: "Mar 2024 — May 2024",
    tech: ["Django Channels", "WebRTC", "Redis", "React"],
    highlights: [
      "Real-time streaming with Django Channels + WebRTC",
      "Redis pub-sub for scalable connections",
    ],
    accent: "primary",
  },
  {
    icon: CreditCard,
    title: "Kicksly E-Commerce (MERN)",
    period: "Aug 2023 — Dec 2023",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Full shopping flow: browse, cart, checkout",
      "Frontend and backend stay in sync",
    ],
    accent: "secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Key <span className="text-primary text-glow-cyan">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const isSecondary = project.accent === "secondary";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-xl p-6 md:p-8 hover:${isSecondary ? "glow-amber" : "glow-cyan"} transition-all duration-500 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${isSecondary ? "bg-secondary/10" : "bg-primary/10"}`}>
                    <Icon size={20} className={isSecondary ? "text-secondary" : "text-primary"} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-base font-bold text-foreground leading-tight">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
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
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isSecondary ? "bg-secondary/60" : "bg-primary/60"}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
