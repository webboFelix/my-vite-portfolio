import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block  bg-white p-32 dark:bg-black/90 xl:p-24 z-0 lg:p-16 md:p-12 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
