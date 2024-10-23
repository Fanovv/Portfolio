"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Link from "next/link";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { useMediaQuery } from "@/hooks/use-media-query";
import { background, opacity } from "./animate";
import Nav from "./nav";
import { links } from "./config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const mobileCheck = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (isMobile) return setIsActive(false);
    if (mobileCheck) return setIsActive(false);
  }, [isMobile, mobileCheck]);

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md">
            {config.author}
          </Button>
        </Link>

        {!isMobile ? (
          <div className={cn(styles.el, "relative flex flex-row")}>
            {links.map((link, index) => {
              const { title, href, target } = link;

              return (
                <Link
                  key={`l_${index}`}
                  href={href}
                  target={target}
                  className={cn(
                    styles.label,
                    "cursor-can-hover rounded-lg"
                  )}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        ) : (
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            className={cn(
              styles.el,
              "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
            )}
          >
            <div className="relative flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        )}
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
