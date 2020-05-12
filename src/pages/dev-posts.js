import React from "react";
import LayoutWhite from "../components/layoutWhite";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function DevPost() {
  const data = useStaticQuery(graphql`
    query GetAllPosts {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "^/dev-posts/" } } }
        sort: { order: DESC, fields: frontmatter___published_at }
      ) {
        nodes {
          frontmatter {
            title
            published_at(formatString: "MMMM DD yyyy")
            hook
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  console.log(data);

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
      <LayoutWhite></LayoutWhite>
    </>
  );
}
