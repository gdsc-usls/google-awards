"use client";
import Image from "next/image";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

import { Award, useAward } from "@/hooks";
import { Container } from "@/components";
import { Diploma, Major, Yearly } from "@/components/Certificates";

export default function Award({ params }: { params: { id: string } }) {
  const [certData, setCertData] = useState<Award | null>();
  const { data } = useAward(params.id);

  return (
    <Container className="mt-24 pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />
      {certData ? (
        <Certificate data={certData} setData={setCertData} />
      ) : (
        <div className="flex gap-x-4 flex-col sm:flex-row gap-y-8 sm:gap-y-0">
          {data.map((item: Award) => (
            <Card key={item.award} data={item} setData={setCertData} />
          ))}
        </div>
      )}
    </Container>
  );
}

type Props = {
  data: Award;
  setData: React.Dispatch<React.SetStateAction<Award | undefined | null>>;
};

const Card = ({ data, setData }: Props) => {
  return (
    <button
      onClick={() => setData(data)}
      className="bg-secondary-300 border text-left border-secondary-200 px-8 py-6 rounded-md bg-opacity-60 transition-all hover:-translate-y-4 duration-300 sm:w-[300px] cursor-pointer flex flex-col justify-between h-[180px] w-full"
    >
      <div>
        <h1 className="text-primary-100 text-xl">{data.name}</h1>
        <h1>{data.award}</h1>
      </div>
      <p className="text-gray-400 text-sm">View Certificate &rarr;</p>
    </button>
  );
};

const Certificate = ({ data, setData }: Props) => {
  return (
    <div className="flex flex-col gap-y-20 items-center">
      <Tilt gyroscope className="max-w-[850px] mx-auto">
        <div className="w-full relative rounded-lg grid place-items-center">
          {data.type === "yearly" && <Yearly data={data} />}
          {data.type === "major" && <Major data={data} />}
          {data.type === "diploma" && <Diploma data={data} />}
        </div>
      </Tilt>
      <button
        type="button"
        onClick={() => setData(null)}
        className="border border-secondary-200 rounded-full px-8 py-3 hover:scale-105 transform transition-all duration-200 bg-secondary-300 bg-opacity-60"
      >
        &larr; &nbsp; Back to List
      </button>
    </div>
  );
};
