"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const ScrollDownIcon = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  });
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="w-fit min-h-[60px] p-1 border-2 rounded-full border-gray-500 dark:border-white"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 25], opacity: [1, 0] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <IoIosArrowDown />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 25], opacity: [1, 0] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <IoIosArrowDown />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDownIcon;
