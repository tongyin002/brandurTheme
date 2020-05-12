import React from "react";
import { Helmet } from "react-helmet";
import LayoutBlack from "../components/layoutBlack";
import DevPostGroup from "../components/devPostGroup";
import FragmentGroup from "../components/fragmentGroup";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            fluid(fit: COVER, quality: 100, jpegQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const photo = data.allImageSharp.edges[3].node.fluid;
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
                <DevPostGroup />
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
                <FragmentGroup />
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
            className="w-full flex-shrink-3 md:mr-px80 md:w-px1150 md:ml-px20 md:overflow-hidden"
          >
            <Img
              className="my-px20 md:h-px760"
              fluid={photo}
              alt="Gatsby Docs are awesome"
            />
          </section>
        </div>
      </LayoutBlack>
    </>
  );
}
