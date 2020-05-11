import React from "react";
import { Helmet } from "react-helmet";
import indexImg from "../images/large.jpg";
import indexImg2x from "../images/large@2x.jpg";
import LayoutBlack from "../components/layoutBlack";

export default function Photos() {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class:
            "bg-black text-white font-default leading-outer antialiased align-baseline",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <LayoutBlack>
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
      </LayoutBlack>
    </>
  );
}
