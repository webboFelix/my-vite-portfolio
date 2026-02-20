import React from "react";

const HireMe = () => {
  return (
    <div className="fixed bottom-0 z-10 left-0 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <img
          src="./circuler-text-removebg.svg"
          alt=""
          className="fill-black dark:fill-white animate-spin-slow"
        />
        <a
          href="mailto:felixwebbo.fw@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black shadow-md border border-solid border-black-900 w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black hover:dark:bg-transparent hover:dark:text-white md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HireMe;
