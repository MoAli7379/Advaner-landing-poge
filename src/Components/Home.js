import React from "react";
import BannerImage from "../Assets/class.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="font-sans min-h-screen text-gray-900 bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col items-center w-full bg-white lg:flex-row">
          <div className="mb-16 text-center lg:my-12 lg:px-16 lg:w-1/2">
            <h1 className="mb-6 text-2xl font-semibold text-gray-700 lg:text-4xl">
              Learn English by Speaking & Having Fun
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Start speaking English right away with native English-speaking teachers! 
              Learn English by watching movies and having fun in the Metaverse.
            </p>
            <div className="flex gap-4">
            <button className="py-2 px-6 rounded-lg bg-[#FF5542] text-white font-semibold uppercase shadow-md hover:bg-blue-600">
            <span className="flex items-center">
              Trial Lesson <FiArrowRight />
            </span>
          </button>
          <button className="py-2 px-6 rounded-lg bg-[#FF5542] text-white font-semibold uppercase shadow-md hover:bg-blue-600">
            <span className="flex items-center">
              Lesson Fees <FiArrowRight />
            </span>
          </button>


            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <img src={BannerImage} alt="Banner" className="w-full h-auto rounded-md  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
