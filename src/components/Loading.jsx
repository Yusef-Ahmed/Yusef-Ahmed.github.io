// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <motion.div
        className="w-20 h-20 rounded-full bg-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          backgroundColor: ["#ff0088", "#0d63f8"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
