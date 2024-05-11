import React from "react";

const HeroSection = () => {
  return (
    <div className="relative mx-auto flex lg:w-8/12 max-w-maxContent flex-col gap-2 text-white text-left">
      <div className="text-5xl md:text-6xl lg:text-[4rem] font-bold dark:text-white">
        Passionate Developer
      </div>
      <div className="font-normal text-2xl md:text-4xl dark:text-neutral-200 py-3">
        Hey there! 👋 I'm Ankit, and I'm all about creating awesome things on
        the web. Welcome to my corner of the internet!
      </div>
    </div>
  );
};

export default HeroSection;
