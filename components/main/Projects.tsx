import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/agri.jpg"
          title="Next Generation Irrigation System"
          description="utilize smart technology, such as sensors and IoT, to optimize water usage by automatically adjusting based on soil moisture, weather conditions, and plant needs, enhancing efficiency and sustainability."
        />
        <ProjectCard
          src="/LPG.jpg"
          title="Industry Safety Device"
          description="specialized tools and equipment, such as safety interlocks, emergency stop buttons, and personal protective equipment (PPE), designed to protect workers from hazards and ensure a safe working environment."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Veritex Innovation Portfolio"
          description="Veritex Innovation is a startup that provides advanced services in the fields of IoT and robotics, focusing on innovative solutions to enhance automation and connectivity for various industries."
        />
      </div>
    </div>
  );
};

export default Projects;