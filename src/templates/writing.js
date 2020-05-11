import React from "react";
import PropTypes from "prop-types";
import LayoutWhite from "../components/layoutWhite";
import ExtraInfo from "../components/extraInfo";

export default function Writing({ post, children, isArticle }) {
  const navExtraInfo = (props) => {
    return (
      <ExtraInfo
        className="hidden font-helvetica text-nav leading-block text-right mr-px2 md:block"
        {...props}
      ></ExtraInfo>
    );
  };

  return (
    <LayoutWhite
      extraInfo={navExtraInfo({ isArticle, info: post.frontmatter })}
    >
      <div className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50 lg:overflow-visible">
        {children}
        <ExtraInfo
          className="italic leading-info text-left font-default md:hidden"
          isArticle={isArticle}
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

Writing.propTypes = {
  post: PropTypes.object,
  children: PropTypes.node,
  isArticle: PropTypes.bool,
};
