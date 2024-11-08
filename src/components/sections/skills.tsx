import { cn } from "@/lib/utils";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className={cn("relative w-full h-screen md:h-[150dvh]")}
    >
      <div className="top-[70px] sticky mb-96 z-[2]">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "bg-opacity-50 text-white italic"
              )}
            >
              <span className="font-black">S</span>kills
            </h2>
          </BoxReveal>
          <img src="/assets/signature.svg" className="absolute left-[50%] translate-x-[-50%] bottom-2 w-32 h-32 md:bottom-12 md:w-auto md:h-auto"/>
        </Link>
        <p className="mx-auto mt-14 line-clamp-4 max-w-3xl font-normal text-md md:text-base text-center text-neutral-300">
          (Tap any key to reveal my skill set!)
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
