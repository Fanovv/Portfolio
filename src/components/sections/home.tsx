import { cn } from "@/lib/utils";
import { usePreloader } from "../preloader";

const HomeSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="home" className={cn("relative w-full h-screen")}>
      {/* <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        ></div>
      </div> */}
    </section>
  );
};

export default HomeSection;
