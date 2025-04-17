"use client";
import React from "react";

import VideoSection from "./VideoSection";
import ImageGallery from "./ImageGallery";

const ProjectsInfo = () => {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="font-bold mb-3 text-2xl md:text-3xl text-center">
        - Projects -
      </h1>
      <h2 className=" mb-2 font-bold">- AgilCurn</h2>
      <p className="text-gray-700 text-justify mb-6">
        Degree project focused on SMEs, facilitating project management through
        the Scrum methodology.
      </p>
      <div className="mb-6">
        <h2 className="font-bold text-primary mb-2">
          Its most common objectives are:
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-justify">
          <li>
            Analyze the specific needs and requirements of SMEs regarding
            project management
          </li>
          <li>
            Develop specific functionalities that facilitate the application of
            Scrum principles and practices, such as the creation and assignment
            of tasks.
          </li>
          <li>
            Implement Scrum as a framework for planning and monitoring projects
            in the application.
          </li>
        </ul>
      </div>
      <h2 className="font-bold text-primary mb-4 text-center text-2xl">
        Progress
      </h2>

      <ImageGallery />

      <div className=" mt-8">
        <h2 className=" mb-2 font-bold">- ChatApp</h2>
        <p className="text-gray-700 text-justify mb-6">
          Real-time social interaction app that allows users to connect via
          chat, send and receive likes, and receive instant notifications.
        </p>

        <h2 className="font-bold text-primary mb-4 text-center text-2xl">
          Progress
        </h2>

        <VideoSection />
      </div>
    </div>
  );
};

export default ProjectsInfo;
