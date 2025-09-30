import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "JavaScript Expertise",
      skills: [
        { name: "JavaScript (ES6+)", level: 98 },
        { name: "React", level: 96 },
        { name: "TypeScript", level: 90 },
        { name: "Vanilla JS", level: 95 },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 96 },
        { name: "CSS3", level: 94 },
        { name: "Tailwind CSS", level: 95 },
        { name: "React Hooks", level: 94 },
      ],
    },
    {
      title: "Tools & Development",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Webpack/Vite", level: 85 },
        { name: "NPM/Yarn", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="skills-heading"
    >
      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-black/40 pointer-events-none"
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
            id="skills-heading"
            className="text-4xl md:text-5xl mb-6 text-white"
          >
            My <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit centered around JavaScript and modern
            frontend technologies I use to create exceptional user interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-yellow-500/20"
            >
              <h3 className="text-2xl text-yellow-400 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-yellow-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
