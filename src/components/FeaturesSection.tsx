import { motion } from "framer-motion";
import { Gem, Package, Clock } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Skilled Craftsmanship",
    description:
      "Our expert bricklayers bring years of experience and attention to detail to every project.",
  },
  {
    icon: Package,
    title: "High-Quality Materials",
    description:
      "We use only premium bricks and materials to ensure durability and lasting beauty.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description:
      "We respect your time and deliver projects on schedule without compromising quality.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
