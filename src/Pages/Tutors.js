import React from "react";
import Navbar from "../Components/Navbar";
import TeacherHome from"../Components/TeacherHome";
import TeacherBody from "../Components/TeacherBody";
import { FiArrowRight } from "react-icons/fi";

import "../App.css";

const Tutors = () => {

  const handleViewAllTutors = () => {
    console.log('View all tutors button clicked!');
    // Here, you can define what you want to do when the button is clicked.
    // For example, you may want to navigate to another page or open a modal.
  }

  return (
    <>
      <Navbar />
      <TeacherHome className= "my-10"/>
      <div className="mx-10 mt-10 md:mx-40">
        <p className="my-8 text-xl font-bold text-gray-900 dark:text-white">
          Find a teacher 
        </p>
        <div className="flex flex-wrap justify-center gap-y-8">
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
          <TeacherBody className="m-4" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10 mx-auto text-center font-sans max-w-screen-md">
    <h2 className="text-center text-4xl font-extrabold mb-10 tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Sign up to see all of our incredible tutors
    </h2>
    <button
        className="bg-[#FF5542] text-white font-bold py-3 mb-10 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
        onClick={handleViewAllTutors}
    >
        <span className="flex items-center justify-center space-x-2">
            <span>Sign up to see All tutors</span> 
            <FiArrowRight />
        </span>
    </button>
</div>




    </>
  );
};

export default Tutors;
