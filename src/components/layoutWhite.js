import React from "react";
import PropTypes from "prop-types";

export default function LayoutWhite({ children, toc, extraInfo }) {
  return (
    <div id="container" className="max-w-full">
      <div className="flex flex-col md:flex-row">
        <section
          id="flag"
          className="hidden md:block md:overflow-hidden md:w-px10"
        ></section>
        <section
          id="nav"
          className="h-24 order-4 w-21/25 my-px20 mx-2/25 md:ml-px40 md:mr-px10 md:mt-px150 md:mb-px50 md:w-px100 md:min-w-px100 md:order-none md:h-auto"
        >
          <div
            id="nav-inner"
            className="mx-auto text-center w-auto md:overflow-auto md:top-px50 md:sticky md:w-px100 md:mx-0"
          >
            <nav className="inline-block font-helvetica text-nav font-bold text-right uppercase md:block md:text-block">
              <ul className="list-none leading-navul mx-auto md:mx-0">
                <li className="float-left leading-navli mx-px5 md:mt-0 md:mb-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="Home"
                    className="hvr-underline-from-center underline-black"
                  >
                    △
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="Longform articles"
                    className="hvr-underline-from-center underline-black"
                  >
                    Articles
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="Email newsletters I publish"
                    className="hvr-underline-from-center underline-black"
                  >
                    Newsletters
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="Fragments (short articles)"
                    className="hvr-underline-from-center underline-black"
                  >
                    Fragments
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="Photography"
                    className="hvr-underline-from-center underline-black"
                  >
                    Photos
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="What I'm doing now"
                    className="hvr-underline-from-center underline-black"
                  >
                    Now
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    title="About me &amp; this site"
                    className="hvr-underline-from-center underline-black"
                  >
                    About
                  </a>
                </li>
                <li className="float-left leading-navli mx-px5 md:my-px8 md:mx-0 md:float-none md:leading-none">
                  <a
                    href="#"
                    className="hvr-underline-from-center underline-black"
                  >
                    <span title="Sitemap">☰</span>
                  </a>
                </li>
              </ul>
            </nav>
            {extraInfo}
          </div>
        </section>
        <section
          id="toc-index"
          className="hidden lg:block lg:w-px100 lg:mx-px10 lg:mt-px150 lg:mb-px50"
        >
          {toc}
        </section>
        {children}
      </div>
    </div>
  );
}

LayoutWhite.propTypes = {
  children: PropTypes.node.isRequired,
  toc: PropTypes.node,
  extraInfo: PropTypes.node,
};
