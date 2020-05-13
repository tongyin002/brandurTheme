import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function PostPreview({
  title,
  published_at,
  slug,
  hook,
  fixed,
}) {
  return (
    <>
      {fixed ? (
        <Img fixed={fixed} className="rounded-xl mr-px15 float-left" />
      ) : (
        ""
      )}
      <div>
        <div className="font-helvetica leading-hook">
          <Link to={slug} className="text-strong font-bold leading-navul">
            {title}
          </Link>
          <span className="italic text-xs text-gray-600 ml-px5">
            {published_at}
          </span>
        </div>
        {hook ? (
          <p className="text-articles leading-outer mt-px5">{hook}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

PostPreview.propTypes = {
  title: PropTypes.string,
  published_at: PropTypes.string,
  slug: PropTypes.string,
  hook: PropTypes.string,
  fixed: PropTypes.any,
};
