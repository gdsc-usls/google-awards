"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Container } from "@/components";

export default function Ticket() {
  return (
    <Container className="mt-52 pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />
      <Tilt
        gyroscope
        className="lg:max-w-[850px] mx-auto rounded overflow-hidden shadow-lg"
      >
        <img
          className="w-full pointer-events-none h-full object-contain"
          src="/images/ticket.png"
          alt="Official E-Ticket"
        />
      </Tilt>
    </Container>
  );
}
