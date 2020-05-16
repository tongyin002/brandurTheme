import React from "react";
import SEO from "../components/seo";
import LayouWhite from "../components/layoutWhite";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Now() {
  const data = useStaticQuery(graphql`
    query GetNow {
      file(relativePath: { eq: "metaInfo/now.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <LayouWhite>
      <SEO keywords={[`tong yin`, `web`, `salesforce`, `quip`]} title="Now" />
      <section
        id="content"
        className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
      >
        <div id="content-inner-standard" className="max-w-full md:max-w-px550">
          <div id="title">
            <h1 className="mt-px20 mb-px30 font-helvetica font-normal text-title tracking-xtight leading-navul md:text-xtitle">
              What I&apos;m Doing Now
            </h1>
          </div>
          <div id="about">
            <p className="my-px20">It&apos;s 2020. What a year to be alive.</p>
            <p className="my-px20">
              <Img fluid={data.file.childImageSharp.fluid}></Img>
            </p>
            <p className="my-px20">
              You only recognize this place if and only if you have been there
              (disclaimer: it&apos;s on Oahu, Hwaii). The cost of reaching to
              the top from the back of the moutain with no stairs on a muddy
              raining day is memorable, not to mention playing hide and seek
              with cops (literally, it&apos;s illegal to be there). For every
              one of us, navigating life with COVID-19 is, for sure, far more
              depressing and exhausting. But we will leap through this, we will
              reach to the top, we will be able to enjoy the view, we will get
              there.
            </p>
            <p className="my-px20">
              There are still a couple of weeks before starting my full time job
              after graduation. With stay at home policy, I&apos;m stuck at
              home. But I will try to not waste a ton of it. A couple of things
              I&apos;m working on: exercising every day, reviewing OS and
              Network materials to pick up C again.
            </p>
          </div>
        </div>
      </section>
    </LayouWhite>
  );
}
