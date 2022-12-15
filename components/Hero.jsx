import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="mt-10 py-4 text-gray-700">
            Hi, I&#39;m{" "}
            <RoughNotationGroup show={true}>
              {" "}
              <Highlight color="#FFFF00">
                <span className="font-bold my-2">Nelson</span>
              </Highlight>
            </RoughNotationGroup>
          </h1>
          <h2 className="py-2 text-gray-700">Aspiring Software Developer</h2>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            A self-motivated professional with over 10 years of experience in
            data analysis and database management. Currently developing a
            program reporting app and improving team workflows to improve human
            interaction experience for teams.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/nelson-lu-075a6b53/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/nelkalm"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:nelkalmlu@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                <FaEnvelope />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1HAxIlnjiO5uU0_9Q8UVN6t99yfrwVIhr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                <BsPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
