import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";

const stats = [
  {
    title: 150,
    subtitle: "Members",
  },
  {
    title: 30,
    subtitle: "Officers",
  },
  {
    title: 21,
    subtitle: "Events",
  },
];

export const About = () => {
  return (
    <section className="bg-secondary-400 mt-72 py-24 relative">
      <Image
        src="/images/glow.png"
        alt="glow"
        fill
        className="opacity-20 w-full h-full absolute top-20 pointer-events-none"
      />
      <Container className="mt-24 z-20 relative">
        <div className="flex md:flex-row gap-10 flex-col items-center">
          <Image
            src="/images/logo.png"
            quality={100}
            width={250}
            height={250}
            className="object-contain pointer-events-none"
            alt="Google Awards Logo"
          />
          <div className="flex flex-col gap-y-10">
            <p className="text-2xl leading-normal text-gray-100 lg:w-3/4 w-full">
              &quot;Google Awards: A testament to the power of recognition,
              fueling passion and driving excellence. By honoring outstanding
              individuals, we inspire a ripple effect of innovation, empower
              dreams, and shape a brighter future together.&quot; - Gian Aibo C.
              Boyero, CEO & Lead
            </p>
            <Link href="/" className="text-primary-100 text-xl">
              Description of Awards &rarr;
            </Link>
          </div>
        </div>
        <div className="h-1 bg-secondary-300 my-32"></div>

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
