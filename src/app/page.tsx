import Image from "next/image";
import { Container, Form, About, Footer } from "@/components";

export default function Home() {
  return (
    <main className="lg:mt-44 mt-32">
      <Container>
        <Image
          priority
          src="/images/glow.png"
          alt="glow"
          fill
          className="opacity-10 w-[1500px] h-full absolute top-0 -left-52 -z-10"
        />

        <Image
          priority
          src="/images/line.png"
          alt="line"
          quality={100}
          height={400}
          width={400}
          className="object-contain mix-blend-difference -z-20 rotate-180 absolute xl:right-44 md:-right-20 -right-44 top-80"
        />

        <Image
          priority
          src="/images/line.png"
          alt="line"
          quality={100}
          height={400}
          width={400}
          className="object-contain mix-blend-difference -z-20 absolute right-0 top-[-800px] hidden lg:block"
        />

        {/* LG ViewPort */}
        <div className="lg:text-7xl text-6xl font-google-mid space-y-6 hidden md:block">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-40% from-secondary-100 to-black">
            A Tribute to Innovation
          </h1>

          <div className="flex">
            <h1 className="whitespace-no">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-40% from-secondary-100 to-black">
                and{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-70% from-primary-100 to-secondary-100">
                Achievement
              </span>
            </h1>

            <Image
              priority
              src="/images/star.png"
              alt="star"
              height={120}
              width={120}
              className="object-contain -mt-6 ml-4"
            />
          </div>
        </div>

        {/* SM ViewPort */}
        <h1 className="text-[2.5rem] leading-10 font-google-mid space-y-6 text-left block md:hidden">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-40% from-secondary-100 to-black">
            A Tribute to Innovation
          </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-40% from-secondary-100 to-black">
            and
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-70% from-primary-100 to-secondary-100">
            {" "}
            Achievement
          </span>
        </h1>
        <p className="md:text-2xl text-secondary-100 w-5/6 md:text-left text-left md:mx-0 sm:w-3/4 lg:w-[55%] text-lg leading-normal mt-10">
          Lorem ipsum dolor sit amet consectetur. Porttitor felis neque mollis
          vel diam non massa. Diam elementum lectus.
        </p>

        <Form />
      </Container>

      <About />
      <Footer />
    </main>
  );
}
