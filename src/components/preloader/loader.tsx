"use client";

import { useEffect, useState } from "react";
import { usePreloader } from ".";
import { motion } from "framer-motion";
import { opacity, slideTop, welcomeTextOpacity } from "./animate";
import styles from "./style.module.scss";
import { StarsBackground } from "../ui/stars-background";
import splitStringUsingRegEx from "@/utils/splitStringUsingRegEx";
import { config } from "@/data/config";

const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Index() {
  const { loadingPercent } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        () => {
          setIndex(index + 1);
        };
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const welcomeText = splitStringUsingRegEx(config.welcome);

  return (
    <motion.div
      variants={slideTop}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <StarsBackground />
          <motion.h1 initial="hidden" whileInView="reveal" transition={{staggerChildren: 5}}>
            {welcomeText.map((char) => (
              <motion.span
                key={char}
                variants={welcomeTextOpacity}
                initial="initial"
                animate="enter"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {(loadingPercent - (loadingPercent % 5)).toFixed(0)} %
          </motion.p>
        </>
      )}
    </motion.div>
  );
}
