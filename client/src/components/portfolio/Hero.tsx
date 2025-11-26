import { motion } from "framer-motion";
import headshot from "@assets/f0bbc569-a9d8-434b-9a98-6bd7b1576373_1763664397913.jpeg";
import heroBg from "@assets/generated_images/soft_focus_medical_background_with_stethoscope.png";
import { Flower2, Flower } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Medical background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      {/* Decorative Flowers */}
      <motion.div 
        className="absolute top-20 left-10 text-primary/10 rotate-12"
        animate={{ rotate: 372 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Flower2 size={120} />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-primary/10 -rotate-12"
        animate={{ rotate: -372 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Flower size={180} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Flower2 size={14} className="text-primary" />
              Registered Nursing Diploma Candidate (2025)
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Bridging Compassion <br />
              <span className="text-primary italic relative">
                with Clinical Excellence
                <Flower className="absolute -top-6 -right-8 text-accent w-8 h-8 opacity-50 animate-pulse" />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Dedicated nursing student with diverse clinical experience in neonatal, surgical, and rural settings. 
              Passionate about patient advocacy, evidence-based care, and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                View Clinical Experience
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-white border border-border text-foreground rounded-md font-medium hover:bg-secondary/50 transition-colors"
              >
                About Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-secondary rounded-full opacity-20 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full -translate-x-4 -translate-y-4" />
              
              {/* Flower accents on photo */}
              <div className="absolute -top-4 -left-4 z-20 bg-white p-2 rounded-full shadow-sm">
                <Flower2 className="text-primary w-6 h-6" />
              </div>
              <div className="absolute -bottom-2 -right-2 z-20 bg-white p-2 rounded-full shadow-sm">
                <Flower className="text-accent w-6 h-6" />
              </div>

              <img
                src={headshot}
                alt="Isabel Kaudani"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
