import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-brickwork.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional bricklayer at work"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Professional Bricklaying Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-hero-foreground mb-6"
          >
            BUILDING{" "}
            <span className="highlight">STRONG FOUNDATIONS</span>
            <br />
            WITH LH BRICKWORK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-hero-foreground/80 mb-8 max-w-xl"
          >
            Professional Bricklaying Services You Can Trust. Serving South West
            Hertfordshire & North London with Quality Craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:07575585757" className="btn-secondary">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
