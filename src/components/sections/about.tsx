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
            "md:col-span-1 xl:h-screen max-h-min",
            "flex flex-col justify-start md:justify-center items-center",
            "xl:p-[5%] md:p-20 pt-40"
          )}
        >
          <img
            src="/assets/person.jpg"
            className="rounded-full w-[40%] h-auto mb-5"
          />
          <span className={cn("max-w-sm md:max-w-lg", "text-center", )}>
            I am a Computer Science graduate from Diponegoro University in
            Indonesia. I am a highly motivated person with integrity and
            purpose.
            <div className="py-2"></div>
            During my college years, I actively participated in organizations as
            well as having work experience, which honed my soft skills such as
            problem solving and teamwork.
            <div className="py-2"></div>I am very interested in the fields of
            Website Development, Network Infrastructure, and System
            Administrator.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
