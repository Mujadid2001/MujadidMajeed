import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">MUJADID</span>
            <br />
            <span className="text-primary text-glow-cyan">MAJEED</span>
          </motion.h1>

          {/* Terminal-style subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-sm md:text-base text-muted-foreground mb-8"
          >
            <span className="text-secondary text-glow-amber">$</span>{" "}
            Full-Stack Developer · AI/ML Engineer · System Architect
            <span className="text-primary animate-cursor ml-1">▌</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building production-grade systems with Python/Django backends, React frontends, 
            and real-time AI features. Gold Medalist CS graduate with a passion for clean, 
            performant code that scales.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold hover:opacity-90 transition-opacity glow-cyan"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-mono text-sm font-semibold hover:border-primary/60 transition-colors"
            >
              <Download size={16} />
              View Projects
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: Mail, href: "mailto:mujadid2001@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
