"use client";
import React, { useState } from "react";
import { ImagenYo } from "../../../public/Imagenes/ImagenYo";
import AboutMeInfo from "./AboutMeInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showAboutMe, setShowAboutMe] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    setShowMenu(false);
  };

  const closeAboutMe = () => {
    setShowAboutMe(false);
  };

  const handleTagClick = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  return (
    <div className="bg-gray-900 py-4 fixed w-full top-0 z-50">
      {showAboutMe && <AboutMeInfo onClose={closeAboutMe} />}
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ImagenYo />
            <div>
              <h3 className="text-white text-lg font-semibold">
                Kevin Sierra Castro
              </h3>
              <p className=" text-gray-400">FullStack Developer 🖥️</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <h3
              className="text-white text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={toggleAboutMe}
            >
              About me
            </h3>
            <h3
              className="text-white text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={() => handleTagClick("experiences")}
            >
              Experiences
            </h3>
            <h3
              className="text-white text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={() => handleTagClick("skills")}
            >
              Skills
            </h3>
            <h3
              className="text-white text-lg font-semibold cursor-pointer hover:text-gray-300 transition duration-300"
              onClick={() => handleTagClick("projects")}
            >
              Projects
            </h3>
          </div>
          <div className="lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="h-10 cursor-pointer text-white"
              style={{ marginRight: "20px" }}
              onClick={toggleMenu}
            />
          </div>
          {showMenu && (
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
              <div className="bg-white w-64 p-4 rounded-md">
                <h3
                  className="text-black text-lg font-semibold cursor-pointer hover:text-gray-800 mb-4"
                  onClick={toggleAboutMe}
                >
                  About me
                </h3>
                <h3
                  className="text-black text-lg font-semibold cursor-pointer hover:text-gray-800 mb-4"
                  onClick={() => handleTagClick("experiences")}
                >
                  Experiences
                </h3>
                <h3
                  className="text-black text-lg font-semibold cursor-pointer hover:text-gray-800 mb-4"
                  onClick={() => handleTagClick("skills")}
                >
                  Skills
                </h3>
                <h3
                  className="text-black text-lg font-semibold cursor-pointer hover:text-gray-800"
                  onClick={() => handleTagClick("projects")}
                >
                  Projects
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
