import Image from "next/image";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="flex justify-between items-start mt-16 z-30">
      <div className="flex gap-x-1 items-center border border-[#454545] lg:px-8 px-5 py-2 rounded-full">
        <Image
          priority
          src="/images/logo.png"
          width={30}
          height={30}
          className="object-contain"
          alt="Google Awards Logo"
        />
        <p>Google Awards</p>
      </div>

      <ul className="flex gap-x-24 lg:flex-row flex-col cursor-pointer mix-blend-difference">
        <li>Home</li>
        <li>About</li>
        <li>GitHub</li>
      </ul>
    </Container>
  );
};
