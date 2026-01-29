import { motion } from "framer-motion";
import gardenWall from "@/assets/project-garden-wall.jpg";
import extension from "@/assets/project-extension.jpg";
import repointing from "@/assets/project-repointing.jpg";
import newBuild from "@/assets/project-new-build.jpg";

const projects = [
  {
    image: extension,
    title: "Modern Home Extension",
    category: "Extensions",
  },
  {
    image: gardenWall,
    title: "Garden Boundary Wall",
    category: "Garden Walls",
  },
  {
    image: repointing,
    title: "Victorian Repointing",
    category: "Repairs",
  },
  {
    image: newBuild,
    title: "New Build Development",
    category: "New Builds",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-section-light section-padding">
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
            Our Work
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            SELECTED <span className="highlight">BRICKWORK</span> PROJECTS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the Best Quality for Every Construction Project of Yours.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-sm text-primary font-medium">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">View All Projects</button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
