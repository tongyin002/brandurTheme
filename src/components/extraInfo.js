import React from "react";
import PropTypes from "prop-types";

export default function ExtraInfo({ className, isArticle, info }) {
  return (
    <section className={`info ${className}`}>
      <div className="hidden md:block md:my-px30 md:border-b"></div>
      <div className="">
        <p className="mb-px20 leading-info">
          <strong className="text-xs font-helvetica not-italic">
            {isArticle ? "Dev-Post" : "Fragment"}
          </strong>
          <br />
          {info.title}
        </p>
        <p className="my-px20 leading-title">
          <strong className="text-xs font-helvetica not-italic">
            Published
          </strong>
          <br />
          {info.published_at}
        </p>
        <p className="my-px20 leading-title">
          <strong className="text-xs font-helvetica not-italic">
            Location
          </strong>
          <br />
          {info.location}
        </p>
        <p className="my-px20 leading-title">
          Find me on Twitter at{" "}
          <a
            href="#"
            className="not-italic font-helvetica font-medium hvr-underline-to-center underline-black"
          >
            @brandur
          </a>
        </p>
      </div>
    </section>
  );
}

ExtraInfo.propTypes = {
  isArticle: PropTypes.bool.isRequired,
  info: PropTypes.object.isRequired,
  className: PropTypes.string,
};
