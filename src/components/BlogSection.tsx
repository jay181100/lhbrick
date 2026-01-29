import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    date: "Jan 15, 2024",
    title: "Guide to Choosing the Right Bricks for Your Project",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    date: "Dec 28, 2023",
    title: "Building Strong Foundations: Expert Brickwork Tips",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    date: "Dec 10, 2023",
    title: "Common Brickwork Mistakes and How to Avoid Them",
    image:
      "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=600&q=80",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-background section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h2 className="heading-lg text-foreground">
              CONSTRUCTION <span className="highlight">EXPERTS SHARE</span>
              <br />
              THEIR BEST EXPERIENCES
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Gain Insights and Expertise from Years of Construction Excellence.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <h3 className="text-lg font-bold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <button className="btn-outline text-sm">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
