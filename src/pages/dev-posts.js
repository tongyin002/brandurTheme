import React from "react";
import LayoutWhite from "../components/layoutWhite";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, Link } from "gatsby";
import { groupBy, forEach } from "lodash";
import PostPreview from "../components/postPreview";

export default function DevPosts() {
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
      allFile(
        filter: {
          relativeDirectory: { regex: "/^dev-posts/images/.+/" }
          name: { eq: "hook" }
        }
      ) {
        nodes {
          childImageSharp {
            fixed(
              fit: COVER
              quality: 100
              jpegQuality: 100
              webpQuality: 100
              height: 75
              width: 75
            ) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          relativeDirectory
        }
      }
    }
  `);

  const posts = groupBy(data.allMarkdownRemark.nodes, (node) => {
    const { published_at } = node.frontmatter;
    return published_at.slice(-4);
  });

  const images = data.allFile.nodes.reduce((dict, node) => {
    const paths = node.relativeDirectory.split("/");
    const key = "/dev-posts/" + paths[paths.length - 1] + "/";
    dict[key] = node.childImageSharp.fixed;
    return dict;
  }, {});

  function createToc(posts) {
    let res = [];
    forEach(posts, (val, key) => {
      res.push(
        <li key={key} className="-mt-px5">
          <Link
            to={`/dev-posts/#${key}`}
            className="hvr-underline-from-center underline-black"
          >
            {key}
          </Link>
        </li>
      );
    });
    return (
      <div className="w-px100 text-right font-helvetica text-nav leading-title">
        <ul className="list-none">{res}</ul>
      </div>
    );
  }

  function createTimeline(posts) {
    let res = [];
    forEach(posts, (postsByYear, year) => {
      res.push(
        <div key={year} id={year}>
          <h2 className="font-helvetica text-2xl tracking-stight mt-px30 -mb-px10">
            {year}
          </h2>
          <ul className="my-px20 list-none">
            {postsByYear.map((post) => {
              const { title } = post.frontmatter;
              const { slug } = post.fields;

              return (
                <li key={title} className="mb-px25">
                  <PostPreview
                    {...post.frontmatter}
                    slug={slug}
                    fixed={images[slug]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    return res;
  }

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
      <LayoutWhite toc={createToc(posts)}>
        <section
          id="content"
          className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
        >
          <div id="content-inner" className="max-w-full md:max-w-px550">
            <div id="title">
              <h1 className="text-title font-helvetica tracking-xtight leading-navul mt-px20 mb-px30 font-normal md:text-xtitle">
                Dev-Posts
              </h1>
            </div>
            <div id="articles" className="text-articles">
              {createTimeline(posts)}
            </div>
          </div>
        </section>
      </LayoutWhite>
    </>
  );
}
