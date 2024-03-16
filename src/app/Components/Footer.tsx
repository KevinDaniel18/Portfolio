"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const phoneNumber = "+57 3017847680";
  const emailAddress = "kevnsc18@gmail.com";

  const copyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="p-14 bg-white w-full">
      <hr className=" mb-14 bg-slate-900 font-bold"/>
      <div className="flex space-x-8 items-center justify-center">
        <Link
          legacyBehavior
          href="https://www.linkedin.com/in/kevin-sierra-castro-b1448b279"
        >
          <a target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "rgb(30, 48, 80)" }}
              className="h-10 bg-white cursor-pointer"
            />
          </a>
        </Link>
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "rgb(30, 48, 80)" }}
          className="h-8 bg-white cursor-pointer"
          onClick={copyNumber}
        />
        <a
          href={`mailto:${emailAddress}?subject=I want to contact you!&body=I saw your portafolio and I liked it`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "rgb(30, 48, 80)" }}
            className="h-8 bg-white cursor-pointer"
          />
        </a>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Footer;
