import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { withPrefix } from "gatsby";

import "../css/pages/cv.scss";

const Cv = () => (
  <Layout>
    <SEO
      title="Resume"
      keywords={[`cv`, `work experience`, `nanette julius`]}
    />
    <h1 className="page-heading">Resume</h1>
    <iframe
      style={{
        width: "100%",
        height: "800px",
        borderWidth: "1px",
        borderStyle: "unset"
      }}
      src={withPrefix("Nanette_Julius.pdf")}
      title="NanetteJuliusCV"
    />
  </Layout>
);

export default Cv;
