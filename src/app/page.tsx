"use client";
import { Meteors } from "@/components/ui/meteors";
import Stars from "../components/Stars";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      
      <div className="flex justify-center items-center text-center text-white font-extrabold text-4xl tracking-widest">
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          
        </div>
      </div>
    </div>
  );
};

const PlayerWithNoSSR = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(module => module.Player),
  {ssr: false},
);

export default Home;
