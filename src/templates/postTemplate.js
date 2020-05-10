import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import DevPost from "../components/devPost";
import LayoutWhite from "../components/layoutWhite";
import ExtraInfo from "../components/extraInfo";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const props = {
    content: post.html,
    title: post.frontmatter.title,
    toc: post.tableOfContents,
  };

  const navExtraInfo = (props) => {
    console.log(props);
    return (
      <ExtraInfo
        className="hidden font-helvetica text-nav leading-block text-right mr-px2 md:block"
        {...props}
      ></ExtraInfo>
    );
  };

  return (
    <LayoutWhite
      extraInfo={navExtraInfo({ isArticle: true, info: post.frontmatter })}
    >
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
      <div className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50 lg:overflow-visible">
        <DevPost {...props}></DevPost>
        <ExtraInfo
          className="italic leading-info text-left font-default md:hidden"
          isArticle={true}
          info={post.frontmatter}
        ></ExtraInfo>
        <p className="text-older my-px20 leading-title italic">
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
    </LayoutWhite>
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
