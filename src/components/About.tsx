import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";

const stats = [
  {
    title: 150,
    subtitle: "Members",
  },
  {
    title: 40,
    subtitle: "Officers",
  },
  {
    title: 30,
    subtitle: "Events",
  },
];

export const About = () => {
  return (
    <section id='about' className="bg-secondary-400 md:mt-72 mt-32 md:pt-24 pt-12 relative pb-32 md:pb-64">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-full h-full absolute top-20 pointer-events-none"
      />
      <Container className="mt-24 z-20 relative">
        <div className="flex md:flex-row flex-col items-center">
          <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] flex-none mb-16 md:mb-0">
            <Image
              src="/images/logo.png"
              quality={100}
              fill
              className="object-contain pointer-events-none"
              alt="Google Awards Logo"
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <p className="md:text-2xl text-xl leading-normal text-gray-100 lg:w-3/4 w-full">
              &quot;Google Awards: A testament to the power of recognition,
              fueling passion and driving excellence. By honoring outstanding
              individuals, we inspire a ripple effect of innovation, empower
              dreams, and shape a brighter future together.&quot; - Gian Aibo C.
              Boyero, CEO & Lead
            </p>
            <Link href="/awards" className="text-primary-100 md:text-xl text-lg">
              Description of Awards &rarr;
            </Link>
          </div>
        </div>
        <div className="h-[2px] bg-secondary-300 my-32"></div>

        <div className="flex justify-evenly">
          {stats.map((s) => (
            <div key={s.title} className="">
              <h1 className="md:text-7xl text-5xl text-center text-white mb-4">
                {s.title}
                <span className="text-primary-100">+</span>
              </h1>
              <p className="md:text-2xl text-xl">{s.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
