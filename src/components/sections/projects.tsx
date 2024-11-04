import { cn } from "@/lib/utils";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section id="projects" className={cn("relative max-w-7xl mx-auto md:h-[130vh] z-[2]")}>
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
          className="absolute xl:left-[57%] md:left-[60%] left-[65%] translate-x-[-50%] bottom-[-60%] md:bottom-[85%] w-32 h-32 xl:bottom-[86%] md:w-auto md:h-auto"
        />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3">

      </div>
    </section>
  );
};

export default ProjectSection;
