import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Writing from "./writing";
import Fragment from "../components/fragment";

export default function FragmentTemplate({ data }) {
  const post = data.markdownRemark;
  const props = {
    content: post.html,
    title: post.frontmatter.title,
  };

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
