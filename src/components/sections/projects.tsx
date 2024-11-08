import { cn } from "@/lib/utils";
import Link from "next/link";
import SlideShow from "../slide-show";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className={cn("relative w-full min-h-max mx-auto z-[2]")}
    >
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "bg-opacity-50 text-white"
          )}
        >
          <span className="font-black">P</span>
          <span className="italic">rojects</span>
        </h2>
        <img
          src="/assets/signature.svg"
          className="absolute xl:left-[57%] md:left-[60%] left-[65%] translate-x-[-50%] bottom-[77%] md:bottom-[78%] w-32 h-32 xl:bottom-[80%] md:w-auto md:h-auto"
        />
      </Link>
      <p className="mx-auto mt-14 line-clamp-4 max-w-3xl font-normal text-md md:text-base text-center text-neutral-300">
          (Click on any project to dive in!)
        </p>
      <div className="pt-20">
      <SlideShow/>
      </div>
    </section>
  );
};

export default ProjectSection;
