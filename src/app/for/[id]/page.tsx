"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { useAward } from "@/hooks";
import { Container } from "@/components";

export default function Award({ params }: { params: { id: string } }) {
  const { data } = useAward(params.id);

  return (
    <Container className="mt-24 pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />
      <Tilt gyroscope className="max-w-[850px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center">
          <p className="absolute lg:mb-32 md:mb-28 sm:mb-24 mb-16 uppercase text-[#C6C6C6] md:[font-size:clamp(14px,3vw,30px)] [font-size:clamp(14px,3vw,30px)]">
            {data?.award}
          </p>
          <p className="absolute lg:mt-16 md:mt-14 sm:mt-12 mt-8 text-primary-100 md:[font-size:clamp(14px,4vw,40px)] [font-size:clamp(14px,4vw,40px)]">
            {data?.name}
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
