import { cn } from "@/lib/utils";
import ContactForm from "../contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className={cn("relative min-h-max md:min-h-screen w-full z-[2]")}>
      <div className="grid xl:grid-cols-2">
        <div
          className={cn(
            "md:col-span-1 xl:h-screen max-h-min",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "xl:pl-40 md:p-20 pt-40 xl:pt-[30%]"
          )}
        >
          <div className="min-w-max">
            <h1
              className={cn(
                "font-bold text-4xl text-transparent text-slate-800 ml-1 text-left",
                "cursor-default text-edge-outline font-display sm:text-5xl md:text-9xl "
              )}
            >
              Let&apos;s get
              <br />
              started.
            </h1>
            <p
              className={cn(
                "md:self-start md:mt-4 font-semibold text-xs text-slate-500 dark:text-zinc-400 ml-3",
                "cursor-default font-display sm:text-xs md:text-sm whitespace-nowrap bg-clip-text "
              )}
            >
              Please contact me via the available form
            </p>
          </div>
        </div>
        <div
          className={cn(
            "md:col-span-1 xl:h-screen max-h-min",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "xl:pt-40 md:pl-20 pb-40 pt-10"
          )}
        >
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
