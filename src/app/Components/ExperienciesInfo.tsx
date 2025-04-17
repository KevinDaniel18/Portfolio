import React from "react";

const ExperienciesInfo = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold mb-3 text-xl">- My experience -</h1>

      <div className="mb-5">
        <h2 className="font-semibold text-lg">
          FullStack Software Developer – Pawify
        </h2>
        <p className="text-sm text-gray-500 mb-2">March 2025 – Present</p>
        <p className="text-gray-700 text-justify">
          At Pawify, I led the migration of the website's visual identity using
          React with Vite, improving both performance and maintainability. I
          implemented a secure user registration and validation system with Zod,
          and developed backend services with Django (Python). I was also
          responsible for connecting and managing the MySQL database to handle
          user and animal-related data efficiently.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">
          Web Developer – Rafael Núñez University
        </h2>
        <p className="text-sm text-gray-500 mb-2">August 2023 – June 2024</p>
        <p className="text-gray-700 text-justify">
          I was part of the development team in charge of rebuilding the
          institutional website using React and Tailwind CSS. Following the
          Scrum methodology, I collaborated with cross-functional teams to
          enhance user experience, accessibility, and performance. I translated
          Figma designs into accessible and responsive components, and
          contributed to the REST API development using PHP and MySQL.
        </p>
      </div>
    </div>
  );
};

export default ExperienciesInfo;
