import React from "react";
import PropTypes from "prop-types";
import "../css/fragment.module.css";

export default function Fragment({ title, content }) {
  return (
    <section id="content">
      <div id="fragments-content-header" className="max-w-px700 mb-px50">
        <div className="font-helvetica mb-px40 text-nav font-bold tracking-normal leading-block uppercase mt-px30">
          <a href="/fragments">Fragments</a>
        </div>
        <h1 className="font-helvetica mb-px40 max-w-px700 text-5xl tracking-xstight leading-navul -ml-px2 md:mb-px30 md:mt-px20 md:text-6xl">
          {title}
        </h1>
      </div>
      <div className="fragments-header-separator"></div>
      <div id="fragment-content" className="max-w-px680">
        <article
          className="max-w-px550 overflow-visible"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </section>
  );
}

Fragment.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
