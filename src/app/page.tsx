"use client";

import AnimatedBackground from "@/components/3d-calculator/animated-background";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectSection from "@/components/sections/projects";
import SkillSection from "@/components/sections/skills";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-transparent")}>
          <div className="top-0 z-[1] fixed w-full h-screen" >
            <AnimatedBackground />
          </div>
          <HomeSection/>
          <SkillSection/>
          <ProjectSection/>
          <ContactSection/>
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
