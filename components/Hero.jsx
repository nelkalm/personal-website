import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  const colors = ["#FFFF00"];

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm{" "}
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
            data analysis and database management. I am currently developing a
            program reporting app and improving team workflows to improve human
            interaction experience for teams. I am also a current Computer
            Science student at Oregon State University. I am obsessed with AI
            generated stuffs.{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
              <FaEnvelope />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
