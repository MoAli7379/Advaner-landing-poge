import React, { useState, useEffect } from "react";
import im1 from "../Assets/image.webp";

const HomeCoursesCard = () => {
  const [tiltDirection, setTiltDirection] = useState('rotate-2');

  useEffect(() => {
    // Randomize tilt direction on component mount
    setTiltDirection(Math.random() > 0.5 ? 'rotate-2' : '-rotate-2');
  }, []);

  return (
    <div className={`min-w-[12rem] md:w-64 lg:w-72 xl:w-80 2xl:w-96 p-1 transform ${tiltDirection} transition-transform duration-200 ease-in-out hover:scale-105`}>
      <div className="h-full rounded-lg overflow-hidden shadow-lg flex flex-col bg-white p-1">
        <div className="flex-grow">
          <div className="mb-1">
            <img
              className="object-cover mb-1 w-full h-32"
              src={im1}
              alt="Illustration of two people having a conversation"
            />
          </div>
          <div className="px-1 text-center">
            <h2 className="title-font text-xs font-small text-gray-900 my-8">
              Basic Conversation Topics
            </h2>
            <p className="text-xs text-gray-700 my-3">
              Gain confidence speaking about familiar topics.
            </p>
          </div>
        </div>
        <div className="border-t pt-0.5 px-1 flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">BEGINNER</span>
          <span className="text-xs text-gray-500">10 LESSONS</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCoursesCard;
