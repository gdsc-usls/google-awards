import Image from "next/image";
import { Container, Form, About, Footer } from "@/components";

export default function Home() {
  return (
    <main className="mt-44">
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
          className="object-contain mix-blend-difference -z-20 rotate-180 absolute right-44 top-80"
        />

        <Image
          priority
          src="/images/line.png"
          alt="line"
          quality={100}
          height={400}
          width={400}
          className="object-contain mix-blend-difference -z-20 absolute right-0 top-[-800px]"
        />
        <div className="text-7xl font-google-mid space-y-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-40% from-secondary-100 to-black">
            A Tribute to Innovation
          </h1>

          <div className="flex">
            <h1>
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
        <p className="text-2xl text-secondary-100 w-[55%] leading-normal">
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
