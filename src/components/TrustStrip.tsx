import { motion } from "framer-motion";
import { Award, Clock, MapPin, Users } from "lucide-react";

const trustItems = [
  { icon: Award, text: "Quality Craftsmanship" },
  { icon: Clock, text: "Reliable Service" },
  { icon: MapPin, text: "Local Experts" },
  { icon: Users, text: "Years of Experience" },
];

const TrustStrip = () => {
  return (
    <section className="bg-background border-y border-border">
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            LH Brickwork — Your Trusted Partner for All Construction Needs
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-foreground"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
