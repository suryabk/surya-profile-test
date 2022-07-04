import React from "react";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <div id="home" className="p-8 h-auto lg:min-h-screen w-full">
      <img
        className="-z-10 h-screen w-50 md:w-full object-cover opacity-10 dark:opacity-5 absolute top-0 left-0"
        src="./assets/desktop-image.jpg"
        alt="hero-wallpaper"
      />
      <div className="hero-overlay dark:bg-opacity-60"></div>
      <div className="hero-content text-center text-black dark:text-white mt-16">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Surya Bhakti Kusuma</h1>
          <p className="mb-5 text-lg font-medium">
            I'm a front-end developer based on Tangerang. Currently, looking for
            oppotunity to gain real experience on professional environment
          </p>
          <a href="#about">
            <button className="btn btn-primary">About me</button>
          </a>
        </div>
      </div>
    </div>
  );
};
