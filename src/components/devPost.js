import React from "react";
import PropTypes from "prop-types";

export default function devPost({ title, content, toc }) {
  return (
    <section id="content">
      <div id="signature-content-header" className="max-w-px1000">
        <div id="title">
          <h1 className="border-b-8 border-black my-px40 pb-px40 font-helvetica tracking-xtight leading-navul text-title md:text-xtitle md:mt-px20 md:mb-px50 md:pb-px50">
            {title}
          </h1>
        </div>
      </div>
      <div id="signature-content" className="max-w-px680">
        <div
          id="toc"
          className={
            toc.length > 0
              ? `text-nav leading-title md:float-right md:ml-px30 md:w-px200`
              : "hidden"
          }
        >
          <h2 className="font-helvetica text-block font-bold tracking-sstight my-px10 uppercase">
            Contents
          </h2>
          <div dangerouslySetInnerHTML={{ __html: toc }}></div>
          <div id="divider-short" className="mx-auto my-px30 border-b w-4/5" />
        </div>
        <article
          className="max-w-px550 overflow-visible"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </section>
  );
}

devPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  toc: PropTypes.string,
};
