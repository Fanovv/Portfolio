"use client";
import Stars from "../components/Stars";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Stars />
      <div className="flex justify-center items-center text-center text-white font-extrabold text-4xl tracking-widest">
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <div>
            <PlayerWithNoSSR
              autoplay
              loop
              src='https://lottie.host/acb08d5e-a519-4f19-a5ff-9daed9915a57/rOqtqUQOxN.json'
              style={{ height: '500px', width: '500px' }}
            />
          </div>
          <span className="absolute top-72">
            WEBSITE UNDER CONSTRUCTION
          </span>
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
