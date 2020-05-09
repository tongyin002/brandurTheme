import React from "react";
import { Helmet } from "react-helmet";
import indexImg from "../images/large.jpg";
import indexImg2x from "../images/large@2x.jpg";

export default function Photos() {
  return (
    <div id="container" className="my-px50 max-w-full md:my-px20">
      <Helmet
        bodyAttributes={{
          class:
            "bg-black text-white font-default leading-outer antialiased align-baseline",
        }}
      />
      <div
        id="nav"
        className="hidden md:block md:h-auto md:my-px15 md:mx-px20 md:w-auto md:min-w-px100"
      >
        <div
          id="nav-inner"
          className="max-w-none w-full overflow-auto top-px50"
        >
          <nav className="inline-block font-helvetica text-nav font-bold text-right uppercase">
            <ul className="list-none leading-navul mx-auto">
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Home" className="hvr-underline-from-center">
                  △
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href="#"
                  title="Longform articles"
                  className="hvr-underline-from-center"
                >
                  Articles
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href="#"
                  title="Email newsletters I publish"
                  className="hvr-underline-from-center"
                >
                  Newsletters
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href="#"
                  title="Fragments (short articles)"
                  className="hvr-underline-from-center"
                >
                  Fragments
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href="#"
                  title="Photography"
                  className="hvr-underline-from-center"
                >
                  Photos
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href=""
                  title="What I'm doing now"
                  className="hvr-underline-from-center"
                >
                  Now
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a
                  href="#"
                  title="About me &amp; this site "
                  className="hvr-underline-from-center"
                >
                  About
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" className="hvr-underline-from-center">
                  <span title="Sitemap">☰</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section
        id="content-photos"
        className="mt-px40 mb-px20 mx-auto max-w-px1580 md:my-px60"
      >
        <div id="content-photos-inner" className="mx-px20 md:mx-px40">
          <h1 className="text-title mt-px20 mb-px30 font-helvetica font-normal leading-navul tracking-xtight md:text-xtitle">
            Photos
          </h1>
          <ul className="list-none">
            <li className="max-w-px1500">
              <a href="#">
                <img
                  className="my-px10 w-full max-w-full md:my-px20"
                  src={indexImg}
                  srcSet={`${indexImg2x} 2x, ${indexImg} 1x`}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div id="nav" className="h-24 order-4 w-21/25 my-px20 mx-2/25 md:hidden">
        <div id="nav-inner" className="mx-auto text-center w-auto">
          <nav className="inline-block font-helvetica text-nav font-bold text-right uppercase">
            <ul className="list-none leading-navul mx-auto">
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Home">
                  △
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Longform articles">
                  Articles
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Email newsletters I publish">
                  Newsletters
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Fragments (short articles)">
                  Fragments
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="Photography">
                  Photos
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="" title="What I'm doing now">
                  Now
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#" title="About me &amp; this site">
                  About
                </a>
              </li>
              <li className="float-left leading-navli mx-px5">
                <a href="#">
                  <span title="Sitemap">☰</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
