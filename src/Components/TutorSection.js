import React from 'react';
import TutorCard from './TutorCard';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Forward arrow from react-icons

const TutorSection = () => {
    return (
        <>
            <div className="flex justify-center overflow-x-scroll scrollbar-hide">
                <div className="flex gap-4 px-4 py-2">
                    <TutorCard
                        name="John Doe"
                        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        count={100}
                        rating={4.99}
                        avatarUrl="https://via.placeholder.com/150"
                        description="John is a great tutor..."
                    />
                    <TutorCard
                        name="Jane Doe"
                        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        count={200}
                        rating={4.8}
                        avatarUrl="https://via.placeholder.com/150"
                        description="Jane is a passionate tutor..."
                    />
                    <TutorCard
                        name="Alex Johnson"
                        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        count={150}
                        rating={4.7}
                        avatarUrl="https://via.placeholder.com/150"
                        description="Alex has a knack for making complicated subjects easy to understand..."
                    />
                    <TutorCard
                        name="Bob Smith"
                        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                        count={150}
                        rating={4.7}
                        avatarUrl="https://via.placeholder.com/150"
                        description="Bob is an experienced tutor who loves helping students succeed..."
                    />
                </div>
            </div>

            <div className="my-14 flex flex-col items-center justify-center bg-white  rounded-lg p-6 my-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Choose Your Own Tutor</h2>
                <p className="text-lg text-gray-600 mb-4">Choose the tutor that has the personality, professional experience, or focus area you need!</p>
                <button className="inline-flex items-center justify-center px-6 py-2 mb-4 text-base font-medium rounded-md text-white bg-[#FF5542] transform transition duration-500 ease-in-out hover:scale-105">
                    Start Now
                    <AiOutlineArrowRight size={24} className="ml-2" />
                </button>
                
            </div>


        </>
    );
};

export default TutorSection;
