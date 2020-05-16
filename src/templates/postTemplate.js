import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import Writing from "./writing";
import DevPost from "../components/devPost";

export default function PostTemplate({ data }) {
  const post = data.markdownRemark;
  const props = {
    content: post.html,
    title: post.frontmatter.title,
    toc: post.tableOfContents,
  };

  return (
    <>
      <SEO
        keywords={[`tong yin`, `web`, `salesforce`, `quip`]}
        title="Dev-Post"
      />
      <Writing post={post} isArticle={true}>
        <DevPost {...props}></DevPost>
      </Writing>
    </>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        published_at(formatString: "DD MMMM, YYYY")
        location
      }
      tableOfContents
    }
  }
`;
