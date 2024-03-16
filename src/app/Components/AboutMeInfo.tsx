import React from "react";

interface AboutMeInfoProps {
  onClose: () => void;
}

const AboutMeInfo: React.FC<AboutMeInfoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-black bg-opacity-50 fixed inset-0"></div>
      <div className="bg-white p-8 rounded-lg w-full lg:w-5/6 animate-slide-from-right text-black text-lg font-semibol">
        <p>
          I am a systems engineering student, with a solid theoretical
          background and practice in the area of programming. My goal is to
          become a well-trained professional and contribute to the development
          of creative solutions in information technology. Additionally, I am
          committed to continuous learning and staying updated with the latest
          trends and technological advances.
        </p>
        <p className="mt-4">
          Aside from my academic experience, I have participated in practical
          projects that have strengthened my understanding in this field and
          have given me the opportunity to communicate and work as a team, being
          committed to excellence in each task I undertake.
        </p>
        <button
          className="mt-6 font-bold hover:text-gray-300 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutMeInfo;
