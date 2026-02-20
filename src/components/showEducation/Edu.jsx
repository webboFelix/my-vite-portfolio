import React from "react";
import Education from "../education/Education";
import Layout from "../layout/Layout";
import Transition from "../transition/Transition";

function Edu() {
  return (
    <>
      <Transition />
      <div>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <Education />
        </Layout>
      </div>
    </>
  );
}

export default Edu;
