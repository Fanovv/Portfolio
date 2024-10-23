"use client";
import { config } from "@/data/config";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Button } from "../ui/button";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub style={{ height: 24, width: 24 }} color="#fff" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin style={{ height: 24, width: 24 }} color="#fff" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram style={{ height: 24, width: 24 }} color="#fff" />,
  },
];

const SocialMediaButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButton;
