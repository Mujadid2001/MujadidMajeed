import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import RevealText from "./RevealText";

const educationItems = [
  {
    icon: GraduationCap,
    title: "BS Computer Science",
    institution: "The Islamia University of Bahawalpur",
    details: [
      { label: "Award", value: "Gold Medalist", isHighlight: true },
      { label: "CGPA", value: "3.93 / 4.0" },
      { label: "Duration", value: "Feb 2022 — Feb 2026" },
    ],
    color: "primary",
    glowClass: "glow-cyan",
  },
  {
    icon: BookOpen,
    title: "Python Specialization",
    institution: "University of Michigan · Coursera",
    courses: [
      { name: "Python Basics", link: "https://www.coursera.org/account/accomplishments/verify/CTXUNB3RJD8C" },
      { name: "Python Functions, Files & Dictionaries", link: "https://www.coursera.org/account/accomplishments/verify/PKEEFHFFX3VT" },
      { name: "Data Collection & Processing with Python", link: "https://www.coursera.org/account/accomplishments/verify/WW4XPJCH6FT2" },
      { name: "Python Classes & Inheritance", link: "https://www.coursera.org/account/accomplishments/verify/SKLG77PBUCKP" },
    ],
    duration: "Feb 2023 — Sep 2023",
    color: "secondary",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Floating Particles - Reduced for performance */}
      <FloatingParticles count={10} color="secondary" opacity={0.07} />
      
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Education & <span className="text-primary text-glow-cyan">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`glass-card rounded-xl p-8 transition-all duration-500 group ${educationItems[0].glowClass}`}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="p-3 rounded-lg bg-primary/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <GraduationCap size={20} className="text-primary" />
              </motion.div>
              <div>
                <h3 className="font-mono text-sm font-bold text-foreground">
                  {educationItems[0].title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {educationItems[0].institution}
                </p>
              </div>
            </motion.div>

            <div className="space-y-3">
              {educationItems[0].details.map((detail, i) => (
                <motion.div 
                  key={detail.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center justify-between p-2 rounded transition-colors ${
                    detail.isHighlight ? "bg-primary/10 border border-primary/20" : ""
                  }`}
                >
                  {detail.isHighlight ? (
                    <>
                      <motion.span 
                        className="flex items-center gap-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Award size={14} className="text-secondary" />
                        <span className="text-sm text-secondary font-semibold">{detail.label}</span>
                      </motion.span>
                      <span className="font-mono text-sm text-secondary font-bold text-glow-amber">
                        {detail.value}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground">{detail.label}</span>
                      <span className="font-mono text-sm font-bold text-foreground">{detail.value}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom accent */}
            <motion.div
              className="mt-6 h-0.5 bg-gradient-to-r from-primary to-cyan-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-8 transition-all duration-500 hover:glow-amber group"
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="p-3 rounded-lg bg-secondary/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <BookOpen size={20} className="text-secondary" />
              </motion.div>
              <div>
                <h3 className="font-mono text-sm font-bold text-foreground">
                  {educationItems[1].title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {educationItems[1].institution}
                </p>
              </div>
            </motion.div>

            <div className="space-y-2 mb-4">
              {educationItems[1].courses?.map((course, i) => (
                <motion.a 
                  key={course.name}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 5, color: "hsl(40 100% 50%)" }}
                  className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer transition-colors hover:text-secondary group"
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  <span className="hover:underline">{course.name}</span>
                  <motion.span 
                    className="text-xs opacity-0 group-hover:opacity-100 text-secondary"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    ↗
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex items-center justify-between pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-sm text-muted-foreground">Duration</span>
              <span className="font-mono text-xs text-muted-foreground">{educationItems[1].duration}</span>
            </motion.div>

            {/* Bottom accent */}
            <motion.div
              className="mt-4 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
