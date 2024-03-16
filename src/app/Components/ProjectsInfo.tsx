"use client";
import React from "react";

const ProjectsInfo = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold mb-3 text-xl">- Projects -</h1>
      <p className="text-gray-700 text-justify">
        I am currently developing a mobile application that will help small and
        medium enterprises (SME) to manage their projects, the app is called
        AgilCurn.
      </p>
      <br />
      <p className="font-bold text-blue-800">Its most common objectives are:</p>
      <div className="text-gray-700 text-justify">
        <li>
          Analyze the specific needs and requirements of SMEs regarding project
          management
        </li>
        <li>
          Develop specific functionalities that facilitate the application of
          Scrum principles and practices, such as the creation and assignment of
          tasks.
        </li>
        <li>
          Implement Scrum as a framework for planning and monitoring projects in
          the application.
        </li>
      </div>
      <br />
      <p className="font-bold text-blue-800 mb-2 flex justify-center">
        Progress
      </p>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 text-center">
              <hr className="block lg:hidden my-2 border-blue-800" />
              <h2 className="font-bold">Dashboard</h2>
              <br />
              <p className="text-gray-700 text-justify">
                Where you can see the projects created and the status
              </p>
              <br />
              <div className="flex justify-center">
                <img
                  src="/Imagenes/image1.jpeg"
                  alt="img1"
                  id="img1"
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "20rem",
                    pointerEvents: "none",
                  }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <hr className="block lg:hidden my-4 border-blue-800" />
            <div className="mb-4 p-4 text-center">
              <hr className="block lg:hidden my-2 border-blue-800" />
              <h2 className="font-bold">Projects</h2>
              <br />
              <p className="text-gray-700 text-justify">
                Where you can create and delete your projects
              </p>
              <br />
              <div className="flex justify-center">
                <img
                  src="/Imagenes/image2.jpeg"
                  alt="img1"
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "20rem",
                    pointerEvents: "none",
                  }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-l border-gray-400 h-100"></div>
        <div className="lg:w-1/2">
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 text-center">
              <hr className="block lg:hidden my-2 border-blue-800" />
              <h2 className="font-bold">Create Projects</h2>
              <br />
              <p className="text-gray-700 text-justify">
                Where you can create your projects and set a start and end date
              </p>
              <br />
              <div className="flex justify-center">
                <img
                  src="/Imagenes/image3.jpeg"
                  alt="img1"
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "20rem",
                    pointerEvents: "none",
                  }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <hr className="block lg:hidden my-4 border-blue-800" />
            <div className="mb-4 p-4 text-center">
              <hr className="block lg:hidden my-2 border-blue-800" />
              <h2 className="font-bold">Tasks</h2>
              <br />
              <p className="text-gray-700 text-justify">
                Where you can add tasks and delete them
              </p>
              <br />
              <div className="flex justify-center">
                <img
                  src="/Imagenes/image4.jpeg"
                  alt="img1"
                  className=""
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: "20rem",
                    pointerEvents: "none",
                  }}
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
