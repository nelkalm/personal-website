import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { Highlight } from "./Highlight";

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
            reporting analytics. In 2018,
          </p>
          <p className="py-2">Check out my latest projects here.</p>
        </div>
        <div>
          <img src="../public/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
