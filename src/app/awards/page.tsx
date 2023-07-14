import Image from "next/image";
import { Container } from "@/components";

export default function Awards() {
  return (
    <Container className="mt-20 md:mt-44 pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-[1500px] h-full absolute top-0 -z-10"
      />

      <div className="flex flex-col md:gap-y-44 gap-y-24">
        <Info
          title="Yearly Awards"
          content="These accolades honor outstanding individuals who have demonstrated exceptional skills and qualities in various aspects of the tech industry. From exceptional leadership to technical expertise, these categories celebrate those who have raised the bar and made remarkable contributions."
        />

        <Info
          title="Major Awards"
          content="These distinguished honors recognize the cream of the crop within the Google Developer community. From the most influential Google Fellow to the versatile All-Rounder, these awards celebrate those who have achieved the highest level of distinction and impact, making them true trailblazers in the industry."
        />

        <Info
          title="Minor Awards"
          content="These awards shine a spotlight on individuals who have showcased excellence in specific areas that are crucial to the success of the tech community. From exceptional leadership and community engagement to public speaking and mentorship, these awards acknowledge the invaluable contributions of individuals who have gone above and beyond."
        />
      </div>
    </Container>
  );
}

type Props = {
  title: string;
  content: string;
};

const Info = ({ title, content }: Props) => {
  return (
    <div className="flex md:gap-x-10 gap-x-5">
      <div className="md:w-4 w-2 md:h-56 h-72 flex-none bg-gradient-to-b from-primary-100 to-black"></div>
      <div>
        <h1 className="md:text-6xl text-4xl font-google-mid md:mb-8 mb-4 bg-clip-text text-transparent bg-gradient-to-b from-60% from-secondary-100 to-black">
          {title}
        </h1>
        <p className="md:text-2xl text-lg leading-normal">{content}</p>
      </div>
    </div>
  );
};
