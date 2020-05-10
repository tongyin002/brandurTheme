import React from "react";
import { Helmet } from "react-helmet";
import LayoutWhite from "../components/layoutWhite";

function IndexPage() {
  return (
    <LayoutWhite>
      <Helmet
        bodyAttributes={{
          class: "font-default leading-outer antialiased align-baseline",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </LayoutWhite>
  );
}

export default IndexPage;
