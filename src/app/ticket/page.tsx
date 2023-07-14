"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <div className="mt-52 pb-32 md:pb-64">
      <Image
        priority
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />
      <Tilt
        gyroscope
        className="lg:max-w-[850px] md:max-w-[600px] max-w-[400px] mx-auto rounded overflow-hidden shadow-lg"
      >
        <img
          className="w-full pointer-events-none h-full object-cover"
          src="/images/ticket.png"
          alt="PowerOn Certificate"
        />
      </Tilt>
    </div>
  );
}
