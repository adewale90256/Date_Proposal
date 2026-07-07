import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;
