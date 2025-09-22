import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: "Modern JavaScript",
      description:
        "Expert in ES6+ (Arrow functions, async/await, and modules) for clean, efficient code.",
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
        "Fast, responsive, and efficient—my frontend work is built for performance. From optimized components to smooth interactions, speed is always part of the design.",
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
            I began my professional journey in civil engineering, 
            where I developed a strong foundation in structure, 
            precision, and problem-solving. While I enjoyed the discipline, 
            I found myself increasingly drawn to the creative and dynamic world of technology.          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              Today, I’m a frontend developer specializing in 
              React and Tailwind CSS. I build modular, responsive interfaces 
              that balance clean architecture with visual clarity. 
              My work blends logic and design to create seamless user experiences across devices.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Whether I’m collaborating on a freelance project, contributing to a team, 
              or exploring new tools, I bring curiosity, adaptability, and a builder’s mindset 
              to every challenge. I’m currently open to internships, freelance opportunities, 
              and junior developer roles.

            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "ES6+",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "CSS3",
                "HTML5",
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
