import React from "react";
import ProjectItem from "./ProjectItem";

import restlessCryptImg from "../public/assets/projects/restless-crypt.png";
import hashmapImg from "../public/assets/projects/hashmap-sc.png";
import reportSageImg from "../public/assets/projects/reportSage.png";
import youTrainImg from "../public/assets/projects/youTrain.png";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h3 className="uppercase text-xl tracking-widest text-[#808000]">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ReportSage"
            projectDescription="MongoDB, Express, React, Node, User Authentication"
            backgroundImg={reportSageImg}
            projectUrl="/reportsage"
          />
          <ProjectItem
            title="HashMap Implementation"
            projectDescription="Python, Data Structures, Hashing"
            backgroundImg={hashmapImg}
            projectUrl="/hashmap"
          />
          <ProjectItem
            title="Restless Crypt"
            projectDescription="Python, Pygame, Graphical User Interace, Object-Oriented Programming"
            backgroundImg={restlessCryptImg}
            projectUrl="/restless-crypt"
          />
          <ProjectItem
            title="YouTrain"
            projectDescription="MongoDB, Express, React, Node"
            backgroundImg={youTrainImg}
            projectUrl="/youTrain"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
