import React from 'react';
import TutorCard from './TutorCard';
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  centerMode: true,
  centerPadding: "30px", // reduce the centerPadding value
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const TeacherHome = () => {
  const handleViewAllTutors = () => {
    console.log("View All Tutors button clicked.");
  };

  return (
    <div className="my-10 text-center font-sans">
      <h2 className="text-7xl font-bold mb-3">Our Tutors</h2>
      <p className="m-14 text-lg text-gray-600">
        Our tutors are all native English speakers and experts at teaching the Cambly curriculum. Many hold graduate degrees from top universities in the US, UK, and Canada. We are continually impressed by our tutors, and we think you will be too!
      </p>
      <button
        className="bg-[#FF5542] text-white font-bold py-3 mb-10 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
        onClick={handleViewAllTutors}
      >
        <span className="flex items-center">
          Sign up to see All tutors <FiArrowRight />
        </span>
      </button>

      <Slider {...settings}>
        <TutorCard
          name="John Doe"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={100}
          rating={4.99}
          avatarUrl="https://via.placeholder.com/150"
        />
        <TutorCard
          name="Jane Doe"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={200}
          rating={4.8}
          avatarUrl="https://via.placeholder.com/150"
        />
        <TutorCard
          name="Alex Johnson"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={150}
          rating={4.7}
          avatarUrl="https://via.placeholder.com/150"
        />
        <TutorCard
          name="Alex Johnson"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={150}
          rating={4.7}
          avatarUrl="https://via.placeholder.com/150"
        />
        <TutorCard
          name="Alex Johnson"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={150}
          rating={4.7}
          avatarUrl="https://via.placeholder.com/150"
        /><TutorCard
        name="Alex Johnson"
        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        count={150}
        rating={4.7}
        avatarUrl="https://via.placeholder.com/150"
      /><TutorCard
      name="Alex Johnson"
      videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
      count={150}
      rating={4.7}
      avatarUrl="https://via.placeholder.com/150"
    /><TutorCard
    name="Alex Johnson"
    videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    count={150}
    rating={4.7}
    avatarUrl="https://via.placeholder.com/150"
  />
        <TutorCard
          name="Emily Smith"
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          count={180}
          rating={5}
          avatarUrl="https://via.placeholder.com/150"
        />
      </Slider>
    </div>
  );
};

export default TeacherHome;
