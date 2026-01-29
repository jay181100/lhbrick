import { motion } from "framer-motion";
import {
  Hammer,
  Home,
  TreePine,
  Wrench,
  Building2,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Bricklaying",
    description:
      "Expert bricklaying services for residential and commercial projects with precision and care.",
  },
  {
    icon: Home,
    title: "Extensions",
    description:
      "Quality home extensions that seamlessly blend with your existing property.",
  },
  {
    icon: TreePine,
    title: "Garden Walls",
    description:
      "Beautiful, durable garden walls that enhance your outdoor space.",
  },
  {
    icon: Wrench,
    title: "Repointing & Repairs",
    description:
      "Professional repointing and brick repair services to restore your brickwork.",
  },
  {
    icon: Building2,
    title: "New Builds",
    description:
      "Complete brickwork solutions for new construction projects of any scale.",
  },
  {
    icon: Layers,
    title: "Structural Brickwork",
    description:
      "Strong, reliable structural brickwork for foundations and load-bearing walls.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-section-light section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Services
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            YOUR <span className="highlight">CONSTRUCTION JOURNEY</span>
            <br />
            STARTS HERE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Most Comprehensive Brickwork Choices. Leading Services for Every
            Stage of Your Project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elevated group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <button className="btn-outline text-sm">
                See More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
