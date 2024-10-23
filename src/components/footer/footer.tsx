import { config } from "@/data/config";
import SocialMediaButton from "../social/social-media-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-400">
        © {year}. All rights reserved by {config.author}.
      </p>
      <SocialMediaButton />
    </footer>
  );
}

export default Footer;
