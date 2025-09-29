import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  const links = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "#", label: "Email" },
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
            className="p-2 rounded-lg border border-yellow-400/20 text-gray-400 hover:text-yellow-300 hover:border-yellow-400/40 transition-all duration-300 backdrop-blur-sm group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}