import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

export default function Post({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const post1 = posts[0];

  const title = post1.node.frontmatter.title;
  const content = post1.node.html;
  const toc = post1.node.tableOfContents;

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
      <section id="content" className="mx-2/25 w-21/25 overflow-hidden flex-1">
        <div id="signature-content-header" className="max-w-px1000">
          <div id="title">
            <h1 className="border-b-8 border-black mt-px20 mb-px40 pb-px40 font-helvetica tracking-xtight leading-navul text-title">
              {title}
            </h1>
          </div>
        </div>
        <div id="signature-content" className="max-w-px680">
          <div id="toc" className="text-nav leading-6">
            <h2 className="font-helvetica text-block font-bold tracking-sstight my-px10 uppercase">
              Contents
            </h2>
            <div dangerouslySetInnerHTML={{ __html: toc }}></div>
          </div>
          <article
            className="max-w-full"
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>
        </div>
      </section>
    </>
  );
}

Post.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            hook
          }
          tableOfContents(
            maxDepth: 10
            absolute: true
            pathToSlugField: "frontmatter.title"
          )
          excerpt
        }
      }
    }
  }
`;
