import React, { useState } from "react";
import { FiStar } from "react-icons/fi";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
Modal.setAppElement('#root')

const customModalStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%', // Width is 100%
    maxWidth: '400px', // Max width is 400px
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.15)'
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

const TutorCard = ({ name, videoUrl, count, rating, avatarUrl, description, captionUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isYoutubeUrl = videoUrl.includes("youtube.com");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="bg-white p-2 shadow-md rounded-xl overflow-hidden flex flex-col">
      <div className="relative overflow-hidden rounded-xl mb-2 cursor-pointer h-56" onClick={openModal}>
        <img
          src={captionUrl}
          alt="Caption thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Tutor Video"
        style={customModalStyles}
      >
        <div className="bg-white p-0 shadow-md rounded-xl overflow-hidden flex flex-col w-full h-full">
          <div className="relative overflow-hidden rounded-xl mb-2 h-56">
            {isYoutubeUrl ? (
              <YouTube 
                videoId={new URL(videoUrl).searchParams.get('v')} 
                opts={{ 
                  height: '100%', 
                  width: '100%', 
                  playerVars: { autoplay: 1 }  // Add autoplay option here
                }} 
                className="w-full h-full object-cover" 
                style={{ borderRadius: '15px' }}
              />
            ) : (
              <video
                src={videoUrl}
                controls
                className="w-full h-full object-cover"
                style={{ borderRadius: '15px' }}
                autoPlay
              />
            )}
          </div>

          <div className="px-4">
            <div className="flex justify-between items-center mt-2 mb-4">
              <div className="flex items-center">
                <img src={avatarUrl} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500" />
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-gray-500">{count} students</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FiStar className="text-yellow-500 fill-current" />
                <p className="ml-2 text-lg font-semibold">{rating}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">About {name}:</h4>
              <p>{description}</p>
            </div>

            <button 
  className="w-full my-4 bg-[#FF5542] text-white py-2 mt-4 rounded transform transition duration-500 ease-in-out hover:scale-105" 
  onClick={() => {
    window.open('https://advancerenglish.com/teachers', '_blank', 'noopener,noreferrer');
    closeModal();
  }}
>
  Start Learning
</button>

          </div>
        </div>
      </Modal>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={avatarUrl} alt={name} className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500" />
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">{count} students</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <FiStar className="text-yellow-500 fill-current" />
          <p className="ml-2 text-lg font-semibold">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;