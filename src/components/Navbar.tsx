import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    // If on home page, scroll to top smoothly
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on other page, navigate to home and scroll to top
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleNavClick = (id: string) => {
    // If on home page, scroll to section
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home with hash
      navigate(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? "glass-card border-b border-border shadow-lg shadow-primary/10" 
          : "glass-card border-b border-border/50"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={handleLogoClick}
          className="font-mono text-lg font-bold text-primary text-glow-cyan flex items-center gap-2 cursor-pointer bg-none border-none p-0"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Zap size={20} />
          </motion.div>
          {"MM"}
        </motion.button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.button
              key={l.id}
              onClick={() => handleNavClick(l.id)}
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group cursor-pointer bg-none border-none p-0"
            >
              {l.label}
              {/* Enhanced multi-layer underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-1 left-0 h-px bg-gradient-to-r from-primary/50 to-secondary/50 blur-sm"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, delay: 0.05 }}
              />
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

        </div>

        {/* Mobile toggle */}
        <motion.button 
          onClick={() => setOpen(!open)} 
          type="button"
          className="md:hidden text-primary bg-none border-none p-0 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-border overflow-hidden bg-background/80 backdrop-blur-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => handleNavClick(l.id)}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 8, color: "hsl(187 100% 45%)" }}
                  className="font-mono text-sm text-muted-foreground transition-colors text-left bg-none border-none p-0 cursor-pointer"
                >
                  <span className="text-primary">→</span> {l.label}
                </motion.button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
