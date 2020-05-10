import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import DevPost from "../components/devPost";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const props = {
    content: post.html,
    title: post.frontmatter.title,
    toc: post.tableOfContents,
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
      <DevPost {...props}></DevPost>
      <div id="info" className="mx-2/25 w-21/25 overflow-hidden flex-1">
        <div className="italic leading-info text-left font-default">
          <p className="text-older mb-px20 leading-info">
            <strong className="text-xs font-helvetica not-italic">
              Article
            </strong>
            <br />
            {post.frontmatter.title}
          </p>
          <p className="text-older my-px20 leading-title">
            <strong className="text-xs font-helvetica not-italic">
              Published
            </strong>
            <br />
            {post.frontmatter.published_at}
          </p>
          <p className="text-older my-px20 leading-title">
            <strong className="text-xs font-helvetica not-italic">
              Location
            </strong>
            <br />
            {post.frontmatter.location}
          </p>
          <p className="text-older my-px20 leading-title">
            Find me on Twitter at{" "}
            <a
              href="#"
              className="not-italic font-helvetica font-medium hvr-underline-to-center underline-black"
            >
              @brandur
            </a>
          </p>
        </div>
        <p className="text-older my-px20 leading-title">
          Did I make a mistake? Please consider{" "}
          <a
            className="hvr-underline-to-center underline-black"
            href="https://github.com/brandur/sorg/edit/master/content/articles/sortsupport-inet.md"
          >
            sending a pull request
          </a>
          .
        </p>
      </div>
    </>
  );
}

BlogPost.propTypes = {
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
