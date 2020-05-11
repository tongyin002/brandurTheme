import React from "react";
import PropTypes from "prop-types";
import Nav from "../components/nav";
import { ResponsiveCtx } from "../contexts/responsiveCtx";

export default function LayoutBlack({ children }) {
  return (
    <div id="container" className="my-px50 max-w-full md:my-px20">
      <div
        id="nav"
        className="hidden md:block md:h-auto md:my-px15 md:mx-px20 md:w-auto md:min-w-px100"
      >
        <div
          id="nav-inner"
          className="max-w-none w-full overflow-auto top-px50"
        >
          <ResponsiveCtx.Provider
            value={{ isResponsive: false, bgColorWhite: false }}
          >
            <Nav />
          </ResponsiveCtx.Provider>
        </div>
      </div>
      {children}
      <div id="nav" className="h-24 order-4 w-21/25 my-px20 mx-2/25 md:hidden">
        <div id="nav-inner" className="mx-auto text-center w-auto">
          <ResponsiveCtx.Provider
            value={{ isResponsive: false, bgColorWhite: false }}
          >
            <Nav />
          </ResponsiveCtx.Provider>
        </div>
      </div>
    </div>
  );
}

LayoutBlack.propTypes = {
  children: PropTypes.node,
};