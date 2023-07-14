"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Container } from "@/components";

export default function Award({ params }: { params: { id: string } }) {
  return (
    <Container className="mt-24 pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />
      <Tilt gyroscope className="max-w-[850px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center overflow-hidden">
          <p className="absolute font-google md:text-[40px] text-lg sm:text-[30px] text-secondary-100 font-bold md:mt-18 sm:mt-12 mt-8 uppercase">
            {params.id}
          </p>
          <img
            className="w-full pointer-events-none h-full object-cover"
            src="/images/certificates/yearly.png"
            alt="PowerOn Certificate"
          />
        </div>
      </Tilt>
    </Container>
  );
}
