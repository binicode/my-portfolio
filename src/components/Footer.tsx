import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} aria-hidden="true" />,
      href: "https://github.com/binicode",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} aria-hidden="true" />,
      href: "https://www.linkedin.com/in/biniyam-abera-engineer",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} aria-hidden="true" />,
      href: "https://x.com/ritaye099",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} aria-hidden="true" />,
      href: "mailto:myrita099@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-black border-t border-yellow-500/20 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-400 text-sm">
          © {currentYear} Biniyam Abera
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
