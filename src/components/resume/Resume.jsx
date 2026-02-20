import React from "react";
import Education from "../education/Education";
import Layout from "../layout/Layout";
import Transition from "../transition/Transition";
import Experiene from "../experience/Experiene";
import Certs from "../certs/Certs";
import About from "../about/About";

function Resume() {
  return (
    <>
      <Transition />
      <div>
        <Layout className="pt-14 space-y-20 sm:pt-16 md:pt-20 lg:pt-24">
          <About />
          <Education />
          <Experiene />
          <Certs />
        </Layout>
      </div>
    </>
  );
}

export default Resume;
