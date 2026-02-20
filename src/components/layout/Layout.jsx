import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full min-h-full inline-block bg-white dark:bg-black/90 z-0
        p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 2xl:p-24
        min-[1536px]:p-32
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
