"use client";
import React, { useState, useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import Spinner from "./Spinner";

const Lema = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center shadow-md">
      {loading ? (
        <div
          className="text-xl"
          style={{ marginTop: "6rem", marginBottom: "6rem" }}
        >
          <Spinner />
        </div>
      ) : (
        <div
          className=" text-xl font-bold text-blue-800 "
          style={{ marginTop: "6rem", marginBottom: "6rem" }}
        >
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Your potential has no limits.").start();
            }}
            options={{
              strings: [
                "Move forward with determination",
                "succeed with passion",
              ],
              autoStart: true,
              delay: 60,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Lema;
