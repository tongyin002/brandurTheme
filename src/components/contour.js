import React from "react";
import PropTypes from "prop-types";

export default function Contour({ children }) {
  return (
    <div className="absolute inset-0 bg-black text-white font-default leading-para antialiased align-baseline">
      {children}
    </div>
  );
}

Contour.propTypes = {
  children: PropTypes.node.isRequired,
};
