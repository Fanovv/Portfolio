import { cn } from "@/lib/utils";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className={cn("relative w-full h-screen z-[2]")}>
      <Link href={"#about"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "bg-opacity-50 text-white"
          )}
        >
          <span className="italic">About</span>{" "}
          <span className="font-black">Me</span>
        </h2>
        <img
          src="/assets/signature.svg"
          className="absolute xl:left-[57%] left-[65%] translate-x-[-50%] bottom-[80%] w-32 h-32 xl:bottom-[82%] md:w-auto md:h-auto"
        />
      </Link>
      <div className="grid md:grid-cols-2">
        <div className="grid col-span-1"></div>
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)]",
            "md:col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-32 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;
