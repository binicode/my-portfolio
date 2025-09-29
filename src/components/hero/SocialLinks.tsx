import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  const links = [
    { Icon: Github, href: "https://github.com/binicode", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/biniyam-abera-engineer",
      label: "LinkedIn",
    },
    { Icon: Mail, href: "mailto:myrita099@email.com", label: "Email" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="flex items-center gap-6 pt-8"
    >
      <span className="text-gray-400 text-sm">Connect with me</span>
      <div className="flex gap-4">
        {links.map(({ Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-lg border border-yellow-400/20 text-gray-400 hover:text-yellow-300 hover:border-yellow-400/40 transition-all duration-300 backdrop-blur-sm group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            <Icon size={20} aria-hidden="true" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
