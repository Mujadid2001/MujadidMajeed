import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
  accent: "primary" | "secondary";
}

const ProjectGallery = ({ images, projectTitle, accent }: ProjectGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const validImages = images.filter((img) => img !== "");

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex, validImages.length]);

  if (validImages.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-12 rounded-lg border-2 border-dashed flex flex-col items-center justify-center min-h-64 ${
          accent === "secondary"
            ? "border-secondary/30 bg-secondary/5"
            : "border-primary/30 bg-primary/5"
        }`}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`${accent === "secondary" ? "text-secondary/40" : "text-primary/40"}`}
        >
          <ImageIcon size={48} />
        </motion.div>
        <p
          className={`mt-4 text-sm font-mono ${
            accent === "secondary" ? "text-secondary/50" : "text-primary/50"
          }`}
        >
          Gallery coming soon
        </p>
      </motion.div>
    );
  }

  const goToNext = () => {
    setDirection(1);
    setSelectedIndex(
      selectedIndex === null
        ? 0
        : (selectedIndex + 1) % validImages.length
    );
  };

  const goToPrev = () => {
    setDirection(-1);
    setSelectedIndex(
      selectedIndex === null
        ? validImages.length - 1
        : (selectedIndex - 1 + validImages.length) % validImages.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {validImages.map((image, i) => (
          <motion.button
            key={i}
            variants={itemVariants}
            onClick={() => {
              setDirection(i > (selectedIndex ?? 0) ? 1 : -1);
              setSelectedIndex(i);
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            className={`relative h-32 rounded-lg overflow-hidden border-2 cursor-pointer transition-all group bg-black flex items-center justify-center ${
              selectedIndex === i
                ? accent === "secondary"
                  ? "border-secondary ring-2 ring-secondary/50"
                  : "border-primary ring-2 ring-primary/50"
                : accent === "secondary"
                ? "border-secondary/20 hover:border-secondary/40"
                : "border-primary/20 hover:border-primary/40"
            }`}
          >
            <motion.img
              src={image}
              alt={`${projectTitle} gallery ${i + 1}`}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%23222' width='128' height='128'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' fill='%23666' font-size='12'%3EImage {i+1}%3C/text%3E%3C/svg%3E`;
              }}
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-t ${
                accent === "secondary"
                  ? "from-secondary/40 to-transparent"
                  : "from-primary/40 to-transparent"
              }`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            {/* Corner accent */}
            <motion.div
              className={`absolute top-1 right-1 w-1 h-1 rounded-full ${
                accent === "secondary" ? "bg-secondary" : "bg-primary"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait" custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedIndex(null)}
              type="button"
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 cursor-pointer p-2"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <X size={32} strokeWidth={2} />
            </motion.button>

            <div
              className="flex items-center justify-center w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <motion.button
                onClick={goToPrev}
                type="button"
                whileHover={{ scale: 1.15, x: -4 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`absolute -left-8 md:left-6 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer z-10 ${
                  accent === "secondary"
                    ? "bg-secondary/30 hover:bg-secondary/50 text-secondary hover:shadow-lg hover:shadow-secondary/50"
                    : "bg-primary/30 hover:bg-primary/50 text-primary hover:shadow-lg hover:shadow-primary/50"
                }`}
              >
                <ChevronLeft size={32} strokeWidth={2} />
              </motion.button>

              {/* Main Image Container */}
              <motion.div
                key={selectedIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative w-full"
              >
                {/* Image Wrapper with border glow - Portrait optimized */}
                <motion.div
                  className={`relative bg-black rounded-xl overflow-hidden shadow-2xl mx-auto flex items-center justify-center w-full h-[85vh] ${
                    accent === "secondary"
                      ? "ring-2 ring-secondary/30"
                      : "ring-2 ring-primary/30"
                  }`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {/* Glow effect background */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl blur-xl -z-10 ${
                      accent === "secondary"
                        ? "bg-secondary/20"
                        : "bg-primary/20"
                    }`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <img
                    src={validImages[selectedIndex]}
                    alt={`${projectTitle} detail ${selectedIndex + 1}`}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23222' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' fill='%23666' font-size='24'%3EImage ${selectedIndex + 1}%3C/text%3E%3C/svg%3E`;
                    }}
                  />

                  {/* Image Counter */}
                  <motion.div
                    className={`absolute bottom-4 left-4 px-4 py-2 rounded-lg font-mono text-sm backdrop-blur-md font-semibold ${
                      accent === "secondary"
                        ? "bg-secondary/40 text-secondary border border-secondary/30"
                        : "bg-primary/40 text-primary border border-primary/30"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {selectedIndex + 1} / {validImages.length}
                  </motion.div>

                  {/* Progress bar */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${
                      accent === "secondary" ? "bg-secondary" : "bg-primary"
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${((selectedIndex + 1) / validImages.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>

              {/* Next Button */}
              <motion.button
                onClick={goToNext}
                type="button"
                whileHover={{ scale: 1.15, x: 4 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`absolute -right-8 md:right-6 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer z-10 ${
                  accent === "secondary"
                    ? "bg-secondary/30 hover:bg-secondary/50 text-secondary hover:shadow-lg hover:shadow-secondary/50"
                    : "bg-primary/30 hover:bg-primary/50 text-primary hover:shadow-lg hover:shadow-primary/50"
                }`}
              >
                <ChevronRight size={32} strokeWidth={2} />
              </motion.button>
            </div>

            {/* Keyboard Navigation Hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs md:text-sm font-mono backdrop-blur-sm bg-black/40 px-4 py-2 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <span className="hidden md:inline">← → Arrow keys to navigate • ESC to close</span>
              <span className="md:hidden">← → to navigate • ESC to close</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
