import { motion } from "framer-motion";
import profileImage from "../../assets/profile-picture.webp";

export function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      className="space-y-4 lg:pr-8 relative flex justify-center lg:justify-end"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20 rounded-full blur-3xl scale-110"
        aria-hidden="true"
      />
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
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border border-yellow-400/10 rounded-full"
        style={{
          width: "140%",
          height: "140%",
          left: "-20%",
          top: "-20%",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <motion.div
          className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 rounded-full blur-xl opacity-60"
            aria-hidden="true"
          />
          <motion.img
            src={profileImage}
            width={384}
            height={384}
            alt="Biniyam's profile portrait"
            className="w-full h-full rounded-full object-cover border-4 border-yellow-400/40 shadow-2xl shadow-yellow-400/20 relative z-10"
            initial={{ borderRadius: "20%" }}
            animate={{ borderRadius: "50%" }}
            transition={{ duration: 1, delay: 0.8 }}
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400/60"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
