import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: "Modern JavaScript",
      description:
        "Expert in ES6+, async/await, modules, and modern JavaScript patterns for building scalable applications.",
    },
    {
      icon: <Palette className="w-8 h-8 text-yellow-400" />,
      title: "Interactive UI",
      description:
        "Creating dynamic, interactive user interfaces with vanilla JavaScript and React that engage users.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance",
      description:
        "Optimizing JavaScript code for speed, efficiency, and smooth user experiences across all devices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate JavaScript developer with 5+ years of experience
            creating stunning user interfaces and interactive web experiences
            using modern JavaScript, React, and cutting-edge web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              My journey in JavaScript development started during college, where
              I discovered my passion for creating dynamic, interactive user
              interfaces. Since then, I've worked with startups and established
              companies, leveraging the power of modern JavaScript to transform
              designs into pixel-perfect, responsive web experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I specialize in vanilla JavaScript, ES6+, React, and modern
              JavaScript frameworks, always staying up-to-date with the latest
              ECMAScript features and performance optimization techniques. When
              I'm not coding, you can find me exploring new JavaScript
              libraries, contributing to open source projects, or experimenting
              with cutting-edge JavaScript features.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "ES6+",
                "React",
                "Node.js",
                "TypeScript",
                "CSS3",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
