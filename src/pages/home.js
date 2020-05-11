import React from "react";
import { Helmet } from "react-helmet";
import LayoutBlack from "../components/layoutBlack";
import indexImg from "../images/large.jpg";
import indexImg2x from "../images/large@2x.jpg";

export default function Home() {
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
        <div
          id="flexcontainer-index"
          className="flex flex-col justify-center mx-2/25 w-21/25 text-index leading-para max-w-xxl md:flex-row md:my-px60 md:mx-auto md:text-base md:leading-outer md:w-full"
        >
          <section
            id="text"
            className="max-w-full flex-shrink md:my-0 md:mr-px20 md:ml-px80 md:max-w-px300"
          >
            <h1
              id="block"
              className="font-helvetica tracking-normal font-bold my-px15 text-block leading-block uppercase"
            >
              about
            </h1>
            <p className="my-px10">
              I&apos;m{" "}
              <a className="hvr-underline-to-center" href="#">
                @brandur
              </a>
              , an occasional writer, and engineer at Stripe and previously
              Heroku.
            </p>
            <p className="my-px10">
              I most often talk about web APIs, Postgres, Rust, software safety
              and resilience, efficient human interfaces, and running.
            </p>
            <div id="writing" className="mx-3/50 md:mx-0">
              <div
                id="divider-short"
                className="mx-auto my-px25 border-b border-gray-900 w-4/5"
              />
              <h1
                id="block"
                className="font-helvetica tracking-normal font-bold my-px15 text-block leading-block uppercase"
              >
                articles
              </h1>
              <ul className="mt-px10 mb-px25 list-none">
                <li className="mb-px25">
                  <p
                    id="title"
                    className="font-helvetica font-bold my-px10 leading-title"
                  >
                    <a href="#" className="hvr-underline-from-center ">
                      Doubling the Sorting Speed of Postgres Network Types with
                      Abbreviated Keys
                    </a>
                  </p>
                  <p id="hook" className="leading-outer text-hook">
                    Making the sorting speed of network types in Postgres twice
                    as fast by designing SortSupport abbreviated keys compatible
                    with their existing sort semantics.{" "}
                    <span
                      id="date"
                      className="text-block italic mx-px3 text-date"
                    >
                      August&nbsp;7,&nbsp;2019
                    </span>
                  </p>
                </li>
                <li className="mb-px25">
                  <p
                    id="title"
                    className="font-helvetica font-bold my-px10 leading-title"
                  >
                    <a href="#" className="hvr-underline-from-center ">
                      Sequences: A Modest, Contra-garden Travel Project
                    </a>
                  </p>
                  <p id="hook" className="leading-outer text-hook">
                    In the spirit of the continued production of independent
                    content, I&apos;m running a two-week photography and writing
                    project in Berlin called{" "}
                    <span className="italic">Sequences</span>
                    {". "}
                    <span
                      id="date"
                      className="text-block italic mx-px3 text-date"
                    >
                      June&nbsp;4,&nbsp;2019
                    </span>
                  </p>
                </li>
                <li className="mb-px25">
                  <p
                    id="title"
                    className="font-helvetica font-bold my-px10 leading-title"
                  >
                    <a href="#" className="hvr-underline-from-center ">
                      Building a Robust Live Reloader with WebSockets and Go
                    </a>
                  </p>
                  <p id="hook" className="leading-outer text-hook">
                    A walkthrough of the design of a live reload feature for the
                    static site generator that builds this site, touching on
                    fsnotify, WebSockets, and the curious case of file 4913.{" "}
                    <span
                      id="date"
                      className="text-block italic mx-px3 text-date"
                    >
                      May&nbsp;28,&nbsp;2019
                    </span>
                  </p>
                </li>
              </ul>
              <p id="older" className="my-px10 text-older text-date">
                <em>
                  Older articles available{" "}
                  <a href="#" className="text-white hvr-underline-to-center">
                    here
                  </a>
                  .
                </em>
              </p>
              <div
                id="divider-short"
                className="mx-auto my-px25 border-b border-gray-900 w-4/5"
              />
              <h1
                id="block"
                className="font-helvetica tracking-normal font-bold my-px15 text-block leading-block uppercase"
              >
                fragments
              </h1>
              <ul className="mt-px10 mb-px25 list-none">
                <li className="mb-px25">
                  <p
                    id="title"
                    className="font-helvetica font-bold my-px10 leading-title"
                  >
                    <a href="#" className="hvr-underline-from-center ">
                      Development log: libjpeg / MozJPEG optimization shootout
                    </a>
                  </p>
                  <p id="hook" className="leading-outer text-hook">
                    Comparing the results of libjpeg and MozJPEG by optimizing
                    the archive of image&apos;s from this very website.{" "}
                    <span
                      id="date"
                      className="text-block italic mx-px3 text-date"
                    >
                      April&nbsp;15,&nbsp;2020
                    </span>
                  </p>
                </li>
              </ul>
              <p id="older" className="my-px10 text-older text-date">
                <em>
                  Older fragments available{" "}
                  <a href="#" className="text-white hvr-underline-to-center">
                    here
                  </a>
                  .
                </em>
              </p>
            </div>
          </section>
          <section
            id="photo"
            className="max-w-full overflow-auto flex-shrink-3 md:ml-px20 md:mr-px80 md:overflow-hidden md:max-w-px1500"
          >
            <a href="#">
              <img
                className="my-px20 w-full md:h-full md:object-cover"
                src={indexImg}
                srcSet={`${indexImg2x} 2x, ${indexImg} 1x`}
              />
            </a>
          </section>
        </div>
      </LayoutBlack>
    </>
  );
}
