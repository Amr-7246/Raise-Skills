import React from 'react'
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full relative">
    {/* Rotating Ring */}
    {/* <motion.div
      className="w-20 h-20 border-4 border-t-transparent border-green-500 rounded-full absolute animate-spin"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    /> */}

    {/* Bouncing Dots */}
    <div className="flex gap-2 z-10">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-sky-400 dark:bg-green-400 rounded-full"
          animate={{
            y: [-8, 8, -8], 
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    {/* Loading Text */}
    {/* <motion.p
      className="text-green-400 font-bold mt-6 text-lg"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Generating AI Response...
    </motion.p> */}
  </div>
  )
}

export default Loading