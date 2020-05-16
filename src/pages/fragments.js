import React from "react";
import LayoutWhite from "../components/layoutWhite";
import SEO from "../components/seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import { groupBy, forEach } from "lodash";

export default function Fragments() {
  const data = useStaticQuery(graphql`
    query GetAllFragments {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "^/fragments/" } } }
        sort: { order: DESC, fields: frontmatter___published_at }
      ) {
        nodes {
          frontmatter {
            title
            published_at(formatString: "MMMM DD yyyy")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = groupBy(data.allMarkdownRemark.nodes, (node) => {
    const { published_at } = node.frontmatter;
    return published_at.slice(-4);
  });

  function createToc(posts) {
    let res = [];
    forEach(posts, (val, key) => {
      res.push(
        <li key={key} className="-mt-px5">
          <Link
            to={`/fragments/#${key}`}
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
        <div key={year} id={year} className="text-hook">
          <h2 className="font-helvetica mt-px30 -mb-px10 font-bold">{year}</h2>
          <ul className="my-px20 list-none">
            {postsByYear.map((post) => {
              const { title, published_at } = post.frontmatter;
              const { slug } = post.fields;

              return (
                <li key={title} className="mb-px25">
                  <div className="leading-hook">
                    <Link
                      to={slug}
                      className="leading-navul hvr-underline-to-center underline-black"
                    >
                      {title}
                    </Link>
                    <span className="italic text-gray-600 ml-px5">
                      {published_at}
                    </span>
                  </div>
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
    <LayoutWhite toc={createToc(posts)}>
      <SEO
        keywords={[`tong yin`, `web`, `salesforce`, `quip`, `writing`]}
        title="Fragments"
      />
      <section
        id="content"
        className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
      >
        <div id="content-inner" className="max-w-full md:max-w-px550">
          <div id="title">
            <h1 className="text-title font-helvetica tracking-xtight leading-navul mt-px20 mb-px50 font-normal md:text-xtitle">
              Fragments
            </h1>
          </div>
          <div className="fragments-header-separator"></div>
          <div id="articles" className="text-articles">
            {createTimeline(posts)}
          </div>
        </div>
      </section>
    </LayoutWhite>
  );
}
