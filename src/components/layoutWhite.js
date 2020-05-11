import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import { ResponsiveCtx } from "../contexts/responsiveCtx";

export default function LayoutWhite({ children, toc, extraInfo }) {
  return (
    <div id="container" className="max-w-full">
      <div className="flex flex-col md:flex-row">
        <section
          id="flag"
          className="hidden md:block md:overflow-hidden md:w-px10"
        ></section>
        <section
          id="nav"
          className="h-24 order-4 w-21/25 my-px20 mx-2/25 md:ml-px40 md:mr-px10 md:mt-px150 md:mb-px50 md:w-px100 md:min-w-px100 md:order-none md:h-auto"
        >
          <div
            id="nav-inner"
            className="mx-auto text-center w-auto md:overflow-auto md:top-px50 md:sticky md:w-px100 md:mx-0"
          >
            <ResponsiveCtx.Provider
              value={{ isResponsive: true, bgColorWhite: true }}
            >
              <Nav />
            </ResponsiveCtx.Provider>
            {extraInfo}
          </div>
        </section>
        <section
          id="toc-index"
          className="hidden lg:block lg:w-px100 lg:mx-px10 lg:mt-px150 lg:mb-px50"
        >
          {toc}
        </section>
        {children}
      </div>
    </div>
  );
}

LayoutWhite.propTypes = {
  children: PropTypes.node.isRequired,
  toc: PropTypes.node,
  extraInfo: PropTypes.node,
};
