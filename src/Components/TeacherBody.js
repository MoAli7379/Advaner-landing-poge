import React from "react";
import { Card } from 'flowbite-react';
import Avatar from 'react-avatar';
import { FaStar, FaCalendarAlt, FaComments, FaCertificate } from 'react-icons/fa';
import im1 from "../Assets/Dilek.png";
import im2 from "../Assets/caption3.jpeg";
import im3 from "../Assets/caption4.jpeg";
import im4 from "../Assets/caption1.jpeg";
import im5 from "../Assets/caption2.jpeg";

const teacherDetails = [
  {name: 'Kaan', image: im4, stars: 4.91, reviews: 842, since: 2022},
  {name: 'Saffet', image: im5, stars: 4.80, reviews: 690, since: 2023},
  {name: 'Dara', image: im3, stars: 4.85, reviews: 912, since: 2022},
  {name: 'Sophia', image: im4, stars: 4.89, reviews: 1010, since: 2022},
  {name: 'Kaan', image: im4, stars: 4.91, reviews: 842, since: 2022},
  {name: 'Saffet', image: im5, stars: 4.80, reviews: 690, since: 2023},
  {name: 'Dara', image: im3, stars: 4.85, reviews: 912, since: 2022},
  {name: 'Sophia', image: im4, stars: 4.89, reviews: 1010, since: 2022},
  {name: 'Dara', image: im3, stars: 4.85, reviews: 912, since: 2022},
];

const TeacherBody = () => {
  return (
    teacherDetails.map((teacher) => (
      <Card key={teacher.name} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 mx-auto p-0">
        <div className="flex justify-between items-start">
          <div className="w-80">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-gray-900 dark:text-white ">
                Teacher {teacher.name}
              </p>
              <Avatar
                alt={`${teacher.name}'s avatar`}
                className="rounded-full shadow-lg"
                src={teacher.image}
                size="75"
              />
            </div>
            <div className="mb-6">
              <div className="flex items-center text-sm mr-4 ">
                <FaStar className="text-yellow-500" />
                <p className="ml-2 text-gray-700 dark:text-gray-400">{teacher.stars} • {teacher.reviews} reviews</p>
              </div>
              <div className="flex items-center text-sm mr-4 ">
                <FaCalendarAlt />
                <p className="ml-2 text-gray-700 dark:text-gray-400">Tutor since {teacher.since}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              Hi, I am {teacher.name} ... see more
            </p>
            <div><h4 className="text-lg font-semibold text-gray-900 dark:text-white">Highlights</h4></div>
            <div className="bg-blue-50 rounded p-2 border-t border-b border-gray-200">
              <div className="flex border-b-2 items-center text-sm mr-2 mt-2 mb-2">
                <FaComments />
                <p className="ml-2 text-gray-700 dark:text-gray-400">1000+ Chats</p>
              </div>
              <div className="flex items-center text-sm mr-4 mt-2 mb-2">
                <FaCertificate />
                <p className="ml-2 text-gray-700 dark:text-gray-400">Certified Teacher</p>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 text-sm rounded bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-lg text-center">
              Schedule Trial
            </button>
          </div>
        </div>
      </Card>
    ))
  );
};

export default TeacherBody;
