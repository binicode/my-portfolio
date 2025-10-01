import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "JavaScript E-Commerce App",
      description:
        "A modern e-commerce application built with pure JavaScript and React. Features async/await API calls, ES6 modules, dynamic filtering, and interactive shopping cart functionality.",
      image:
        "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODQwMjk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["JavaScript", "React", "ES6+", "CSS3"],
      github: "https://github.com/binicode/JavaScript-E-Commerce-App.git",
      live: "#",
    },
    {
      title: "Interactive Dashboard",
      description:
        "A dynamic admin dashboard built with modern JavaScript featuring real-time data updates, custom event handling, and responsive charts using JavaScript libraries.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU4NDI2NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["JavaScript", "Node.js", "Chart.js", "Vanilla JS"],
      github: "https://github.com/binicode/Interactive-Dashboard.git",
      live: "#",
    },
    {
      title: "Vanilla JS Web App",
      description:
        "A single-page application built entirely with vanilla JavaScript showcasing DOM manipulation, event delegation, local storage, and smooth animations without frameworks.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NDAzNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Vanilla JavaScript", "ES6+", "CSS3", "HTML5"],
      github: "https://github.com/binicode/Vanila-JS-Web-App.git",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
      style={{
        backgroundImage: "url('/background-image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="projects-heading"
    >
      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-black/60 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl mb-6 text-white"
          >
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent JavaScript projects that showcase my
            expertise in creating dynamic, interactive applications with modern
            JavaScript techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-sm border border-yellow-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code on GitHub"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg hover:shadow-yellow-500/10 transition-shadow focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
