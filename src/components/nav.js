import React, { useContext } from "react";
import { ResponsiveCtx } from "../contexts/responsiveCtx";
import { Link } from "gatsby";

const Menus = [
  {
    value: "△",
    title: "Home",
    link: "/home",
  },
  {
    value: "Articles",
    title: "Longfrom articles",
    link: "/dev-posts",
  },
  {
    value: "Fragments",
    title: "Fragments (short articles)",
    link: "/fragments",
  },
  {
    value: "Photos",
    title: "Photography",
    link: "/photos",
  },
  {
    value: "Now",
    title: "What I'm doing now",
    link: "/now",
  },
  {
    value: "About",
    title: "About me &amp; this site",
    link: "/aboutme",
  },
  {
    value: "☰",
    title: "Sitemap",
    link: "/sitemap",
  },
];

export default function Nav() {
  const { isResponsive, bgColorWhite } = useContext(ResponsiveCtx);

  return (
    <nav
      className={`inline-block font-helvetica text-nav font-bold text-right uppercase ${
        isResponsive ? "md:block md:text-block" : ""
      }`}
    >
      <ul
        className={`list-none leading-navul mx-auto ${
          isResponsive ? "md:mx-0" : ""
        }`}
      >
        {Menus.map((menu, index) => {
          return (
            <li
              key={menu.title}
              className={`float-left leading-navli mx-px5 ${
                isResponsive
                  ? `md:mb-px8 md:mx-0 md:float-none md:leading-none ${
                      index > 1 ? "md:mt-px8" : ""
                    }`
                  : ""
              }`}
            >
              <Link
                to={menu.link}
                title={menu.title}
                className={`hvr-underline-from-center ${
                  bgColorWhite ? "underline-black" : ""
                }`}
              >
                {index == Menus.length - 1 ? (
                  <span title={menu.title}>{menu.value}</span>
                ) : (
                  menu.value
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
