import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

export default function FragmentGroup() {
  return (
    <StaticQuery
      query={graphql`
        query GetFragments {
          allMarkdownRemark(
            filter: { fields: { slug: { regex: "^/fragments/" } } }
            sort: { order: DESC, fields: frontmatter___published_at }
            limit: 1
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
      `}
      render={(data) => {
        return data.allMarkdownRemark.nodes.map((node) => {
          const { title, published_at, hook } = node.frontmatter;
          return (
            <li key={title} className="mb-px25">
              <p
                id="title"
                className="font-helvetica font-bold my-px10 leading-title"
              >
                <Link
                  to={node.fields.slug}
                  className="hvr-underline-from-center "
                >
                  {title}
                </Link>
              </p>
              <p id="hook" className="leading-outer text-hook">
                {hook}{" "}
                <span id="date" className="text-block italic mx-px3 text-date">
                  {published_at}
                </span>
              </p>
            </li>
          );
        });
      }}
    />
  );
}
