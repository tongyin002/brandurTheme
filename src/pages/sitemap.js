import React from "react";
import { Helmet } from "react-helmet";
import LayouWhite from "../components/layoutWhite";
import { Link } from "gatsby";

export default function SiteMap() {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "font-default leading-outer antialiased align-baseline",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <LayouWhite>
        <section
          id="content"
          className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
        >
          <div
            id="content-inner-standard"
            className="max-w-full md:max-w-px550"
          >
            <div id="title">
              <h1 className="mt-px20 mb-px30 font-helvetica font-normal text-title tracking-xtight leading-navul md:text-xtitle">
                Sitemap
              </h1>
            </div>
            <div id="sitemap" className="md:grid md:grid-cols-3">
              <div className="mb-px20">
                <h2 className="font-helvetica font-semibold mb-px10 uppercase text-block">Core</h2>
                <ul>
                  <li className="mb-px3">
                    <Link to="/aboutme" className="hvr-underline-to-center underline-black">About</Link>
                  </li>
                  <li className="mb-px3">
                    <Link to="/home" className="hvr-underline-to-center underline-black">Home</Link>
                  </li>
                  <li className="mb-px3">
                    <Link to="/now" className="hvr-underline-to-center underline-black">Now</Link>
                  </li>
                  <li className="mb-px3">
                    <Link to="/sitemap" className="hvr-underline-to-center underline-black">Sitemap</Link>
                  </li>
                </ul>
              </div>
              <div className="mb-px20">
                <h2 className="font-helvetica font-semibold mb-px10 uppercase text-block">Writings</h2>
                <ul>
                  <li className="mb-px3">
                    <Link to="/dev-posts" className="hvr-underline-to-center underline-black">Articles</Link>
                  </li>
                  <li className="mb-px3">
                    <Link to="/fragments" className="hvr-underline-to-center underline-black">Fragments</Link>
                  </li>
                </ul>
              </div>
              <div className="mb-px20">
                <h2 className="font-helvetica font-semibold mb-px10 uppercase text-block">Other</h2>
                <ul>
                  <li className="mb-px3">
                    <Link to="/photos" className="hvr-underline-to-center underline-black">Photography</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </LayouWhite>
    </>
  );
}
