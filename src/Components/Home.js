import React from "react";
import BannerImage from "../Assets/home.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#faf2ef]">
      <Navbar />

      <div className="flex flex-col-reverse items-center justify-center pt-16 pb-32 md:flex-row">
        <div className="w-full mx-6 md:w-1/2">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-center text-gray-700 md:text-left md:text-4xl lg:text-5xl">
            Learn English by Speaking & Having Fun
          </h1>
          <p className="mb-8 text-lg text-center text-gray-600 md:text-left">
            Start speaking English right away with native English-speaking teachers! 
            Learn English by watching movies and having fun in the Metaverse.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-8 py-3 text-lg font-semibold tracking-wider text-white uppercase transition duration-200 transform bg-[#FF5542] rounded-lg shadow-md hover:shadow-lg hover:scale-105">
              <span className="flex items-center space-x-2">
                Trial Lesson <FiArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full mt-12 md:mt-0 md:w-1/2 md:pl-10">
          <img src={BannerImage} alt="Banner" className="object-cover w-full h-full rounded-md " />
        </div>
      </div>
    </div>
  );
};

export default Home;
