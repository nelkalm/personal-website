import React from "react";
import Image from "next/image";

import python from "../public/assets/skills/python.png";
import cProgramming from "../public/assets/skills/c-programming.png";
import javascript from "../public/assets/skills/javascript.png";
import html from "../public/assets/skills/html-5.png";
import css from "../public/assets/skills/css3.png";
import mongodb from "../public/assets/skills/mongodb.png";
import postgreesql from "../public/assets/skills/postgreesql.png";
import react from "../public/assets/skills/react.png";
import nodejs from "../public/assets/skills/nodejs.png";
import expressjs from "../public/assets/skills/express-js.png";
import nextjs from "../public/assets/skills/nextjs.png";
import tailwindcss from "../public/assets/skills/tailwindcss.png";

const Skills = () => {
  return (
    <div>
      <h3 className="uppercase text-xl tracking-widest text-[#808000]">
        Tech I've worked with
      </h3>
      <div className="flex flex-wrap space-x-4">
        <div className="mx-4 my-4">
          <Image src={python} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            Python
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={cProgramming} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">C</p>
        </div>
        <div className="mx-4 my-4">
          <Image src={javascript} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            Javascript
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={html} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            HTML
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={css} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">CSS</p>
        </div>
        <div className="mx-4 my-4">
          <Image src={mongodb} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            MongoDB
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={postgreesql} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            PostgreSQL
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={react} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            React
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={nodejs} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            NodeJs
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={expressjs} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            Express
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={nextjs} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            NextJS
          </p>
        </div>
        <div className="mx-4 my-4">
          <Image src={tailwindcss} className="h-20 w-20" alt="/" />
          <p className="text-base text-center font-normal text-gray-600">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
