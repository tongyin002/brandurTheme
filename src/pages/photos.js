import React from "react";
import SEO from "../components/seo";
import LayoutBlack from "../components/layoutBlack";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Photos() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "photos" } }) {
        nodes {
          childImageSharp {
            fluid(fit: COVER, webpQuality: 100, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const photos = data.allFile.nodes.map((node) => {
    return node.childImageSharp.fluid;
  });

  return (
    <LayoutBlack>
      <SEO
        keywords={[`tong yin`, `web`, `salesforce`, `quip`, "photography"]}
        title="Photos"
        bodyAttr={{
          class:
            "bg-black text-white font-default leading-outer antialiased align-baseline",
        }}
      />
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
              {photos.map((fluid) => {
                return (
                  <Img
                    key={fluid.src}
                    fluid={fluid}
                    className="my-px10 md:my-px20"
                  ></Img>
                );
              })}
            </li>
          </ul>
        </div>
      </section>
    </LayoutBlack>
  );
}
