import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative bg-hero section-padding overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-hero-foreground mb-6">
            GET <span className="highlight">PROFESSIONAL BRICKWORK</span>
            <br />
            DONE RIGHT
          </h2>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
            Ready to start your next project? Get in touch with our expert team
            for a free, no-obligation quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:07575585757" className="btn-secondary">
              <Phone className="w-5 h-5" />
              Call 07575 585757
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
