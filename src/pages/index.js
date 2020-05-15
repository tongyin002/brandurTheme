import React from "react";
import { Helmet } from "react-helmet";
import LayoutBlack from "../components/layoutBlack";
import DevPostGroup from "../components/devPostGroup";
import FragmentGroup from "../components/fragmentGroup";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

export default function Home() {
  const data = useStaticQuery(graphql`
    query GetPhotos {
      allFile(filter: { relativeDirectory: { eq: "photos" } }) {
        nodes {
          childImageSharp {
            fluid(
              fit: COVER
              webpQuality: 100
              quality: 100
              jpegQuality: 100
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const photo = data.allFile.nodes[2].childImageSharp.fluid;
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
          className="flex flex-col justify-center mx-2/25 w-21/25 text-index leading-para max-w-xxl md:flex-row md:mt-px40 md:mb-px60 md:mx-auto md:text-base md:leading-outer md:w-full"
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
              <a
                className="hvr-underline-to-center"
                href="https://twitter.com/sadsquirrel4"
              >
                @sadsquirrel4
              </a>
              , an occasional blogger, and a future software engineer at Quip.
            </p>
            <p className="my-px10">
              I most often share about web dev processes, web APIs, thoughts on
              readings and product design and many other things.
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
                dev-posts
              </h1>
              <ul className="mt-px10 mb-px25 list-none">
                <DevPostGroup />
              </ul>
              <p id="older" className="my-px10 text-older text-date">
                <em>
                  Older posts available{" "}
                  <Link
                    to="/dev-posts"
                    className="text-white hvr-underline-to-center"
                  >
                    here
                  </Link>
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
                  <Link
                    to="/fragments"
                    className="text-white hvr-underline-to-center"
                  >
                    here
                  </Link>
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
              alt="cover photo"
            />
          </section>
        </div>
      </LayoutBlack>
    </>
  );
}
