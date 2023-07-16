import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="flex justify-between mt-16 z-30 items-center">
      <Link
        href="/"
        className="flex gap-x-1 items-center border border-[#454545] lg:px-8 px-5 py-2 bg-secondary-400 rounded-full"
      >
        <Image
          priority
          src="/images/logo.png"
          width={30}
          height={30}
          className="object-contain"
          alt="Google Awards Logo"
        />
        <p>Google Awards</p>
      </Link>

      <ul className="flex gap-x-24 lg:flex-row flex-col cursor-pointer lg:bg-secondary-400 lg:p-4 lg:px-16 lg:rounded-full lg:border lg:border-[#454545]">
        <li>
          <a href="https://gdsc-usls.live">Home</a>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <a
            href="https://github.com/gdsc-usls/google-awards"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>
      </ul>
    </Container>
  );
};
