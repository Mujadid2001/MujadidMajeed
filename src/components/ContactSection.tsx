import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import FloatingParticles from "./FloatingParticles";
import RevealText from "./RevealText";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "sameEmail">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user entered their own email
    if (formData.email.toLowerCase() === "mujadid2001@gmail.com") {
      setStatus("sameEmail");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }
    
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
  };
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "mujadid2001@gmail.com",
      href: "mailto:mujadid2001@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 309 6820484",
      href: "tel:+923096820484",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect",
      href: "https://linkedin.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Code",
      href: "https://github.com",
      color: "secondary",
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Floating Particles - Reduced for performance */}
      <FloatingParticles count={12} color="primary" opacity={0.08} />
      
      {/* Background animations */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"
        animate={{ y: [-50, 50, -50], x: [-30, 30, -30] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full"
        >
          <span className="font-mono text-xs text-secondary text-glow-amber tracking-widest uppercase">
            // Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Let's <span className="text-primary text-glow-cyan">Talk</span>
          </h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind or want to collaborate? I'm always open to new opportunities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl w-full mb-16">
          {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: color === "primary" 
                  ? "0 0 30px hsl(187 100% 45% / 0.3)"
                  : "0 0 30px hsl(40 100% 50% / 0.3)"
              }}
              className={`glass-card rounded-xl p-6 text-center transition-all duration-500 group ${
                color === "primary" ? "hover:glow-cyan" : "hover:glow-amber"
              }`}
            >
              {/* Icon container */}
              <motion.div
                className="mx-auto mb-3 inline-flex"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Icon 
                  size={28} 
                  className={color === "primary" ? "text-primary" : "text-secondary"} 
                />
              </motion.div>

              {/* Label */}
              <p className="font-mono text-xs text-muted-foreground mb-1">{label}</p>

              {/* Value */}
              <motion.p 
                className={`font-mono text-sm font-semibold truncate ${
                  color === "primary" ? "text-primary group-hover:text-glow-cyan" : "text-secondary group-hover:text-glow-amber"
                }`}
                whileHover={{ letterSpacing: "0.05em" }}
              >
                {value}
              </motion.p>

              {/* Bottom accent line */}
              <motion.div
                className={`mt-3 h-0.5 ${color === "primary" ? "bg-primary" : "bg-secondary"}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl glass-card rounded-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <label className="font-mono text-xs text-primary uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <label className="font-mono text-xs text-primary uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <p className="text-xs text-muted-foreground font-mono">
                💌 I'll use this to get back in touch with you
              </p>
            </motion.div>
          </div>

          {/* Subject Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <label className="font-mono text-xs text-primary uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </motion.div>

          {/* Message TextArea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <label className="font-mono text-xs text-primary uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows={5}
              className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
            />
          </motion.div>

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
            >
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-green-400 font-mono text-sm">
                Message sent successfully! I'll get back to you soon.
              </span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
            >
              <AlertCircle size={20} className="text-red-500" />
              <span className="text-red-400 font-mono text-sm">
                Error sending message. Please try again or email me directly.
              </span>
            </motion.div>
          )}

          {status === "sameEmail" && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg"
            >
              <span className="text-xl">😄</span>
              <span className="text-amber-400 font-mono text-sm font-semibold">
                Haha this my email bro! 😅
              </span>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(187 100% 45% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-mono font-semibold rounded-lg transition-all flex items-center justify-center gap-2 glow-cyan"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
