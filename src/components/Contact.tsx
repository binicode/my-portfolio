import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mejw7hs", // service ID
        "template_w3352tk", // template ID
        templateParams,
        "xo289X4-Z7a5TSjTz" // public key
      )
      .then(() => {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Error sending message:", error);
        setStatusMessage("❌ Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" aria-hidden="true" />,
      title: "Email",
      value: "myrita099@gmail.com",
      link: "#name",
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
      className="pt-20 pb-20 bg-black flex flex-wrap items-baseline content-around justify-center relative"
      style={{
        backgroundImage: "url('/background-image.webp')",
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
            className="text-4xl md:text-5xl mb-6 lg:mt-6 text-white"
          >
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you need someone with a keen eye for detail and a passion for
            keeping websites modern, responsive, and functional—I’m here to
            help.
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
                  className="scroll-mt-40 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-500"
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
                disabled={isSending}
                className={`w-full py-3 px-6 rounded-lg text-sm md:text-base bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg hover:shadow-yellow-500/10 transition-shadow focus:ring-2 focus:ring-yellow-500 focus:outline-none ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>

              {statusMessage && (
                <p
                  className={`text-sm mt-2 ${
                    statusMessage.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
