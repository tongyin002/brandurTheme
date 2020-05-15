import React from "react";
import { Helmet } from "react-helmet";
import LayouWhite from "../components/layoutWhite";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function About() {
  const data = useStaticQuery(graphql`
    query GetImage {
      file(relativePath: { eq: "metaInfo/about.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
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
                About
              </h1>
            </div>
            <div id="about">
              <p className="my-px20">
                <Img fluid={data.file.childImageSharp.fluid}></Img>
              </p>
              <p className="my-px20">
                I&apos;m a grad student living in Santa Clara, CA. who is about
                to graduate soon. Will hopefully be an engineer{" "}
                <a
                  href="https://quip.com/"
                  className="hvr-underline-to-center underline-black"
                >
                  @Quip
                </a>
                . ( if I can get my EAD card on time : ) )
              </p>
              <p className="my-px20">
                I spent a year at Goldwind, a company specilizes designing and
                building windturbines, working on their infrastructure,
                upgrading CI/CD workflow. Spent a few months at Blend, a fintech
                startup that builds platform for streamlining lending process.
                Worked on their public API v3. Having just started my developer
                career, I&apos;m eager to learn everything especially building
                robust and pixel detailed systems.
              </p>
              <p className="my-px20">
                I mainly document development and problm solving process in{" "}
                <Link
                  to="/dev-posts"
                  className="hvr-underline-to-center underline-black"
                >
                  DEV-POSTS
                </Link>
                . Where in{" "}
                <Link
                  to="/fragments"
                  className="hvr-underline-to-center underline-black"
                >
                  FRAGMENTS
                </Link>
                , I share about things I learned and interesting thoughts about
                everything.
              </p>
              <p className="my-px20">
                My favorite movie and TV series are Hayao Miyazaki&apos;s{" "}
                <em>Spirited Away</em> and Philipp Kadelbach&apos;s{" "}
                <em>Generation War</em>. My favorite book is Keigo
                Higashino&apos;s <em>トキオ</em>. I also like swimming, music,
                history, politics and NBA.
              </p>
              <h2 className="text-2xl tracking-stight mt-px30 -mb-px10 font-helvetica font-normal">
                Technology
              </h2>
              <p className="my-px20">
                This site is a static set of HTML, JS, CSS, and image files
                built using Gatsby.js, Tailwindcss, stored on Vercel for now and
                might move to S3 if performance suffers. I do plan to use Circle
                CI to automatically deploy the site once new posts land on the
                master branch even though it doesn&apos;t need any tests to pass
                considering it is a static site.
              </p>
              <h2 className="text-2xl tracking-stight mt-px30 -mb-px10 font-helvetica font-normal">
                Design
              </h2>
              <p className="my-px20">
                Full credit to{" "}
                <a
                  href="https://twitter.com/brandur"
                  className="hvr-underline-to-center underline-black"
                >
                  @brandur
                </a>
                . After luring his site for a long time, I decided to implement
                it from scratch. Just like he said,{" "}
                <a
                  href="http://en.wikipedia.org/wiki/Helvetica_(film)"
                  className="hvr-underline-to-center underline-black"
                >
                  Helvetica
                </a>{" "}
                is indeed a timeless beauty.
              </p>
            </div>
          </div>
        </section>
      </LayouWhite>
    </>
  );
}
