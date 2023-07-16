import Link from "next/link";
import { Container } from "./Container";

export const Footer = () => {
  const data = [
    {
      title: "Shortcuts",
      items: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Ticket",
          link: "/ticket",
        },
        {
          title: "Awards",
          link: "/awards",
        },
      ],
    },

    {
      title: "Projects",
      items: [
        {
          title: "Landing Page",
          link: "https://github.com/gdsc-usls/landing",
        },
        {
          title: "ID Generator",
          link: "https://github.com/gdsc-usls/id-generator",
        },
        {
          title: "Certificate Generator",
          link: "https://github.com/gdsc-usls/certificate-generator",
        },
      ],
    },

    {
      title: "Contact",
      items: [
        {
          title: "Github",
          link: "https://github.com/gdsc-usls",
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/dsc.usls",
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/gdsc_usls/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-400 pt-32 border-t-2 border-t-secondary-300">
      <Container className="flex flex-col justify-between">
        <div className="flex w-full flex-col justify-between gap-20 whitespace-nowrap lg:flex-row lg:gap-40 xl:gap-96">
          <div className="text-white">
            <div className="block text-3xl">
              <p>
                GDSC — <br /> University of St. La Salle
              </p>
              <p className="text-xl text-gray-400 mt-2">
                Powered by Intellect, <br />
                Driven by Values
              </p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            {data.map(({ title, items }) => {
              return (
                <div key={title} className="space-y-2 text-sm md:text-lg">
                  <h3 className="font-medium text-white">{title}</h3>
                  <ul className="flex flex-col  space-y-2 font-normal text-gray-400 [&>li>a:hover]:text-gray-500 [&>li>a:hover]:transition-all">
                    {items.map((item) => (
                      <li key={item.title}>
                        {title === "Shortcuts" ? (
                          <Link href={item.link}>{item.title}</Link>
                        ) : (
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={item.link}
                          >
                            {item.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-28 pb-8 text-center text-xs text-gray-400 md:text-lg">
          &copy; 2023 Google Developer Student Clubs — USLS. All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
};
