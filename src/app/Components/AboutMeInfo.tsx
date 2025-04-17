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
          I am a FullStack developer, I like developing in JavaScript and
          TypeScript technologies. I enjoy working with frameworks and libraries
          like ReactJs, React Native, NextJs, NestJs and NodeJs.
        </p>
        <p className="mt-4">
          I&apos;m a passionate about innovation and solving complex
          problems, and I'm always eager to learn and improve my skills to
          tackle new challenges.
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
