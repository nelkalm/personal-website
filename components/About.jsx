import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";
import profile from "../public/profile.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#808000]">
            About Me
          </p>
          <h2 className="py-4 text-gray-700">
            Hi, I'm{" "}
            <RoughNotationGroup show={true}>
              {" "}
              <Highlight color="#FFFF00">
                <span className="font-bold my-2">Nelson</span>
              </Highlight>
            </RoughNotationGroup>
          </h2>
          <p className="py-2">
            I have spent the last 6 years in public sector collaborating and
            managing diverse stakeholders to develop programs and budget related
            to the environment, community economic development, and housing
            policies. I have always been fascinated with technology and
            leveraging the power of tech to improve workflow and productivity.{" "}
          </p>
          <p className="py-2">
            Since 2016, I have worked with a nonprofit group,{" "}
            <a href="https://dnda.org/">
              Delridge Neighborhoods Development Association
            </a>
            , to design Salesforce database for donor management and improve
            reporting analytics. I automated reporting queries and connected
            external tools that utilize the database using Zapier. And in 2022,
            I developed a full-stack MERN app that program staff can use to
            generate and manage program report and track program analytics.
          </p>
          <p className="py-2">
            In early 2022, I've decided to further my experience with
            technology, enrolling at Oregon State University as a Computer
            Science student. My current studies include algorithmic analysis,
            database design, machine learning, and operating systems.
          </p>
          <p className="py-2">
            Check out my latest projects on this site by clicking the Projects
            section on the Nav bar.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
