import React from "react";
import Education from "../education/Education";
import Layout from "../layout/Layout";
import Transition from "../transition/Transition";

function Edu() {
  return (
    <>
      <Transition />
      <div>
        <Layout className="pt-14 sm:pt-16 md:pt-20 lg:pt-24">
          <Education />
        </Layout>
      </div>
    </>
  );
}

export default Edu;
