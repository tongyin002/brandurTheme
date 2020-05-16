import React from "react";

import SEO from "../components/seo";
import LayoutBlack from "../components/layoutBlack";

function NotFoundPage() {
  return (
    <LayoutBlack>
      <SEO title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 text-5xl text-white font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </LayoutBlack>
  );
}

export default NotFoundPage;
