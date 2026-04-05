import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Education & <span className="text-primary text-glow-cyan">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 glow-cyan"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-foreground">
                  BS Computer Science
                </h3>
                <p className="text-xs text-muted-foreground">
                  The Islamia University of Bahawalpur
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award size={14} className="text-secondary" />
                <span className="font-mono text-sm text-secondary text-glow-amber font-semibold">
                  Gold Medalist
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">CGPA</span>
                <span className="font-mono text-sm font-bold text-foreground">3.93 / 4.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="font-mono text-xs text-muted-foreground">Feb 2022 — Feb 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <BookOpen size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-bold text-foreground">
                  Python Specialization
                </h3>
                <p className="text-xs text-muted-foreground">
                  University of Michigan · Coursera
                </p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {[
                "Python Basics",
                "Functions, Files & Dictionaries",
                "Data Collection & Processing",
                "Classes & Inheritance",
              ].map((course) => (
                <div key={course} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0" />
                  {course}
                </div>
              ))}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="font-mono text-xs text-muted-foreground">Feb 2023 — Sep 2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
