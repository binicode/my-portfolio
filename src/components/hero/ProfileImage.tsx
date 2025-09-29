import { motion } from "framer-motion";
import { Braces, Sparkles } from "lucide-react";
import profileImage from "../../assets/profile-picture.jpg";

export function ProfileImage() {
  const floatingElements = [
    {
      element: <Braces className="w-5 h-5 text-yellow-400" />,
      position: { top: "10%", right: "10%" },
      delay: 0,
    },
    {
      element: (
        <span className="text-yellow-400 font-mono text-lg">
          &lt;/&gt;
        </span>
      ),
      position: { top: "30%", left: "5%" },
      delay: 0.5,
    },
    {
      element: <Sparkles className="w-5 h-5 text-yellow-400" />,
      position: { bottom: "20%", right: "5%" },
      delay: 1,
    },
    {
      element: (
        <span className="text-yellow-400 font-mono text-sm">{}</span>
      ),
      position: { bottom: "30%", left: "10%" },
      delay: 1.5,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      className="space-y-4 lg:pr-8 relative flex justify-center lg:justify-end"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20 rounded-full blur-3xl scale-110" />
      <motion.div
        className="absolute inset-0 border-2 border-yellow-400/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: "120%",
          height: "120%",
          left: "-10%",
          top: "-10%",
        }}
      />
      <motion.div
        className="absolute inset-0 border border-yellow-400/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          width: "140%",
          height: "140%",
          left: "-20%",
          top: "-20%",
        }}
      />
      {floatingElements.map(({ element, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-full backdrop-blur-sm flex items-center justify-center"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { delay: delay + 1 },
            scale: { delay: delay + 1 },
            y: { duration: 3, repeat: Infinity, delay: delay },
          }}
        >
          {element}
        </motion.div>
      ))}
      <div className="relative">
        <motion.div
          className="w-80 h-80 lg:w-96 lg:h-96 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 rounded-full blur-xl opacity-60" />
          <motion.img
            src={profileImage}
            alt="Biniyam"
            className="w-full h-full rounded-full object-cover border-4 border-yellow-400/40 shadow-2xl shadow-yellow-400/20 relative z-10"
            initial={{ borderRadius: "20%" }}
            animate={{ borderRadius: "50%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400/60"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}