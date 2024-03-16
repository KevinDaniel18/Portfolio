"use client";
import React from "react";

export const ImagenYo = () => {
  return (
    <div className="overflow-hidden">
      <img
        src="/Imagenes/yo.jpg"
        alt="yo"
        className="h-16 lg:h-20 w-16 lg:w-20 rounded-full"
        style={{ pointerEvents: "none", marginLeft: "20px" }}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};
