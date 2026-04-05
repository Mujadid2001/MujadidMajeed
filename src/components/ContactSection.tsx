import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Let's <span className="text-primary text-glow-cyan">Talk</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "mujadid2001@gmail.com",
              href: "mailto:mujadid2001@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+92 309 6820484",
              href: "tel:+923096820484",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Connect",
              href: "https://linkedin.com",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "View Code",
              href: "https://github.com",
            },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:glow-cyan transition-all duration-500 group"
            >
              <Icon size={24} className="mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-mono text-xs text-muted-foreground mb-1">{label}</p>
              <p className="font-mono text-sm text-foreground truncate">{value}</p>
            </motion.a>
          ))}
        </div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">{">"}</span> Designed & built by Mujadid Majeed{" "}
            <span className="text-secondary">// 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
