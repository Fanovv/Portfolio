// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useState } from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

const SlideShow = () => {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);

  const handleClick = (idx: string) => {
    setHoverIndex(hoverIndex === idx ? null : idx);
  };

  return (
    <Splide
      options={{
        perPage: 3,
        start: 0,
        pauseOnHover: true,
        arrows: false,
        // type: "loop",
        autoplay: true,
        perMove: 1,
        interval: 3000,
        pagination: false,
        rewind: true,
        lazyLoad: "nearby",
        padding: "20rem",
        gap: "1rem",
        breakpoints: {
          640: {
            perPage: 1,
            padding: 0,
            gap: 0,
          },
          768: {
            perPage: 2,
            padding: "5rem",
            gap: "1rem",
          },
          1024: {
            padding: 0,
            gap: "1rem",
          },
          1440: {
            padding: "5rem",
            gap: "5rem",
          },
        },
        // autoWidth: true
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {projects.map((project, idx) => (
          <SplideSlide
            key={project.id}
            className="flex justify-center items-center overflow-hidden"
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: hoverIndex === project.id ? 180 : 0 }}
              className="h-[58dvh] w-[80dvw] xl:h-[58dvh] xl:w-[29dvw] 2xl:w-[20dvw]"
              onClick={() => handleClick(project.id)}
            >
              <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: hoverIndex === project.id ? 180 : 0 }}
                className="relative w-full h-full"
              >
                <motion.img
                  src={project.src}
                  className={`rounded-lg w-full h-full object-fill absolute`}
                  transition={{ duration: 0.7 }}
                  animate={{
                    filter:
                      hoverIndex === project.id ? "blur(5px)" : "blur(0px)",
                  }}
                  initial={{ filter: "blur(0px)" }}
                  style={{ backfaceVisibility: "hidden" }}
                />
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{
                    rotateY: hoverIndex === project.id ? 0 : 180,
                    opacity: hoverIndex === project.id ? 1 : 0,
                  }}
                  initial={{ rotateY: 180, opacity: 0 }}
                  style={{ backfaceVisibility: "hidden" }}
                  className="bg-opacity-50 w-full h-full flex flex-col items-start rounded-lg absolute top-0 left-0 text-black"
                >
                  <div className="px-2">
                    <h4 className="font-semibold text-lg xl:text-xl m-2 lg:m-8 bg-white bg-opacity-80 backdrop-blur-md rounded-lg inline-block px-2 py-1 capitalize">
                      {project.title}
                    </h4>
                    <span className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg inline-block px-2 py-1 text-sm xl:text-base">
                      {project.desc}
                    </span>
                    <div className="flex flex-col xl:flex-row items-center justify-start gap-3 my-3 mb-8">
                    {project.url && (
                        <Link
                        className="font-extralight flex gap-2 py-0 xl:py-3"
                        rel="noopener"
                        target="_new"
                        href={project.url}
                      >
                        <Button variant={"default"} size={"sm"}>
                          Visit Website
                          <ArrowUpRight className="ml-3 w-5 h-5" />
                        </Button>
                      </Link>
                    )}
                    {project.repo && (
                        <Link
                        className="font-extralight flex gap-2 py-0 xl:py-3"
                        rel="noopener"
                        target="_new"
                        href={project.repo}
                      >
                        <Button variant={"default"} size={"sm"}>
                          Github Repository
                          <ArrowUpRight className="ml-3 w-5 h-5" />
                        </Button>
                      </Link>
                    )}
                    </div>
                  </div>
                  <div className="flex gap-2 px-2 flex-wrap">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg inline-block px-2 py-1 font-medium text-xs xl:text-base">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default SlideShow;
