"use client";
import React from "react";

export const ImagenYo = () => {
  return (
    <div className="overflow-hidden">
      <img
        src="/Imagenes/yo.jpeg"
        alt="yo"
        className="h-20 lg:h-20 rounded-full"
        style={{ pointerEvents: "none", marginLeft: "20px",  }}
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};
