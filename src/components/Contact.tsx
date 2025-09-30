import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" aria-hidden="true" />,
      title: "Email",
      value: "info@biniyam.com",
      link: "mailto:info@biniyam.com",
    },
    {
      icon: <Phone className="w-6 h-6" aria-hidden="true" />,
      title: "Phone",
      value: "+251 (977) 25-5555",
      link: "tel:+251977255555",
    },
    {
      icon: <MapPin className="w-6 h-6" aria-hidden="true" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "https://www.google.com/maps?q=Addis+Ababa,+Ethiopia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-labelledby="contact-heading"
    >
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
            id="contact-heading"
            className="text-4xl md:text-5xl mb-6 text-white"
          >
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-white mb-6">
              Let's start a conversation
            </h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing JavaScript projects, frontend
              development opportunities, or collaborations to create amazing
              interactive experiences.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <a
                    href={info.link}
                    className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors"
                    aria-label={info.title}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.icon}
                  </a>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    <a
                      href={info.link}
                      className="text-white hover:text-yellow-400 transition-colors"
                      aria-label={info.title}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-yellow-500/20"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500 resize-none"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-3"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
