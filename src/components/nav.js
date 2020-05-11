import React from "react";

const Menus = [
  {
    value: "△",
    title: "Home",
    link: "#",
  },
  {
    value: "Articles",
    title: "Longfrom articles",
    link: "#",
  },
  {
    value: "Newsletters",
    title: "Email newsletters I publish",
    link: "#",
  },
  {
    value: "Fragments",
    title: "Fragments (short articles)",
    link: "#",
  },
  {
    value: "Photos",
    title: "Photography",
    link: "#",
  },
  {
    value: "Now",
    title: "What I'm doing now",
    link: "#",
  },
  {
    value: "About",
    title: "About me &amp; this site",
    link: "#",
  },
  {
    value: "☰",
    title: "Sitemap",
    link: "#",
  },
];

export default function Nav() {
  return (
    <nav className="inline-block font-helvetica text-nav font-bold text-right uppercase md:block md:text-block">
      <ul className="list-none leading-navul mx-auto md:mx-0">
        {Menus.map((menu, index) => {
          return (
            <li
              key={menu.title}
              className={`float-left leading-navli mx-px5 md:mb-px8 md:mx-0 md:float-none md:leading-none ${
                index > 1 ? "md:mt-px8" : ""
              }`}
            >
              <a
                href={menu.link}
                title={menu.title}
                className="hvr-underline-from-center underline-black"
              >
                {index == Menus.length - 1 ? (
                  <span title={menu.title}>{menu.value}</span>
                ) : (
                  menu.value
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
