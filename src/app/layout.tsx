import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";
import { ThemeProvider } from "@/components/theme_provider";
import { Meteors } from "@/components/ui/meteors";
import { StarsBackground } from "@/components/ui/stars-background";
import Preloader from "@/components/preloader";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ElasticCursor from "@/components/ui/ElasticCursor";
import ConsoleClear from "@/components/console-clearing";
import {Toaster} from "sonner";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-poppins">
      <body style={{overflow: 'auto'}}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div
            className="fixed inset-0 dark:bg-gradient-to-tl from-black via-zinc-600/20 to-black"
            aria-hidden="true"
          >
            <Meteors number={10} className="-z-50" />
            <StarsBackground className="-z-50"/>
          </div>
          <Preloader>
            <TooltipProvider>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
            <Toaster richColors position="top-right"/>
            <ConsoleClear/>
            <ElasticCursor/>
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
