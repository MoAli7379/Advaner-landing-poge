import React, { useState } from "react";
import { FiStar } from "react-icons/fi";
import Modal from 'react-modal';
import img from "../Assets/Naz.png"

Modal.setAppElement('#root')

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto', // Adjust the height as needed
    overflow: 'auto',
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


const TutorCard = ({ name, videoUrl, count, rating, avatarUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const thumbnailUrl = img; // replace this with your thumbnail url

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="bg-white p-2 shadow-md rounded-xl overflow-hidden md:w-60 mx-0 flex flex-col">
      <div className="h-64 relative overflow-hidden rounded-xl mb-2" onClick={openModal}>
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Tutor Video"
        style={customModalStyles}
      >
        <div className="bg-white p-2 shadow-md rounded-xl overflow-hidden md:w-60 mx-0 flex flex-col">
          <div className="h-64 relative overflow-hidden rounded-xl mb-2">
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
              style={{ borderRadius: '15px' }}
            />
          </div>

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

          <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded" onClick={closeModal}>Start Learning</button>
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
