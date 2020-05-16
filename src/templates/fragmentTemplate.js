import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Writing from "./writing";
import Fragment from "../components/fragment";
import SEO from "../components/seo";

export default function FragmentTemplate({ data }) {
  const post = data.markdownRemark;
  const props = {
    content: post.html,
    title: post.frontmatter.title,
  };

  return (
    <>
      <SEO
        keywords={[`tong yin`, `web`, `salesforce`, `quip`]}
        title="Fragment"
      />
      <Writing post={post} isArticle={false}>
        <Fragment {...props}></Fragment>
      </Writing>
    </>
  );
}

FragmentTemplate.propTypes = {
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
