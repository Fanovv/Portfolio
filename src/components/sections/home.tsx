import { cn } from "@/lib/utils";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { config } from "@/data/config";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { LuFiles } from "react-icons/lu";
import ScrollDownIcon from "../scroll-down-icon";

const HomeSection = () => {
  const { isLoading } = usePreloader();
  const words = [
    "Full Stack Web Developer",
    "Front End Web Developer",
    "IT Support Engineer",
    "Network Engineer",
  ];

  return (
    <section id="home" className={cn("relative w-full h-screen z-[2]")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)]",
            "md:col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-32 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col lg:flex-row">
              <div className="self-center lg:flex flex-col gap-3 hidden mr-4">
                <Link
                  href={
                    config.resume
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex flex-col items-center gap-2 h-full leading-tight">
                      <LuFiles size={24} />
                      <p>
                        R<br />e<br />s<br />u<br />m<br />e
                      </p>
                    </Button>
                  </BoxReveal>
                </Link>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href={"#contact"}>
                      <Button
                        variant={"outline"}
                        className="block h-full overflow-hidden"
                      >
                        Hire
                        <br className="lg:block hidden" />
                        Me
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>pls 🙏</p>
                  </TooltipContent>
                </Tooltip>
                <Link href={config.social.whatsapp} target="_blank">
                  <Button variant={"outline"}>
                    <SiWhatsapp size={24} />
                  </Button>
                </Link>
                <Link href={config.social.linkedin} target="_blank">
                  <Button variant={"outline"}>
                    <SiLinkedin size={24} />
                  </Button>
                </Link>
              </div>
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start md:mb-4 font-semibold text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "font-bold text-4xl text-transparent text-slate-800 ml-1 text-left",
                      "cursor-default text-edge-outline font-display sm:text-5xl md:text-8xl "
                    )}
                  >
                    {config.author.split(" ")[0]}{" "}
                    <br className="lg:hidden block" />{" "}
                    {config.author.split(" ")[1]}
                    <br />
                    {config.author.split(" ")[2]}
                  </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-semibold text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    A<FlipWords words={words} />
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3 lg:hidden max-w-min">
                <Link
                  href={
                    config.resume
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <LuFiles size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block h-full overflow-hidden"
                        >
                          Hire
                          <br className="lg:block hidden" />
                          Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>pls 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link href={config.social.whatsapp} target="_blank">
                    <Button variant={"outline"}>
                      <SiWhatsapp size={24} />
                    </Button>
                  </Link>
                  <Link href={config.social.linkedin} target="_blank">
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HomeSection;
