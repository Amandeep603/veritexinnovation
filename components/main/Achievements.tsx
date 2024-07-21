import React from "react";
import AchievementCard from "../sub/AchievementCard";

const Achievements = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-40 relative "
      id="achievements"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Achievements
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        <AchievementCard
          src="/opju nif.jpg"
          title="3rd Prize in NIF 3.0 ,OPJU ,Raigarh"
          description="Awarded for outstanding innovation in IoT and Robotics at the TechCon 2023."
        />
        <AchievementCard
          src="/NI.jpg"
          title="3rd Prize in National Ideathon, CGC Jhanjeri"
          description="Recognized for exceptional contributions to AI research and development."
        />
        <AchievementCard
          src="/shardha hackathon.jpg"
          title="Finalist in shardha University Hackathon, Delhi"
          description="Honored as the top robotics engineer for groundbreaking work in automation."
        />
        <AchievementCard
          src="/D4 hackathon.jpg"
          title="3rd Prize in D4 Hackathon, CGC Jhanjeri"
          description="Acknowledged for leading industry initiatives and advancements in technology."
        />
        <AchievementCard
          src="/ideathon.jpg"
          title="1st Prize in Emminence Ideathon, CGC Landran"
          description="Received for demonstrating excellence in innovative product development."
        />
        <AchievementCard
          src="/achieve.jpg"
          title="1st Prize in Ideathon, CGC Jhanjeri"
          description="Celebrated as a pioneer in technology for cutting-edge research and development."
        />
        <AchievementCard
          src="/hack-n-win.jpg"
          title="2nd Prize in Hack-N-Win Hackathon, CGC Jhanjeri"
          description="Awarded for outstanding achievements and contributions to the tech industry."
        />
        <AchievementCard
          src="/sih.jpg"
          title="Finalist in Smart India Hackathon 2023"
          description="Recognized for significant contributions to scientific research and development."
        />
      </div>
    </div>
  );
};

export default Achievements;
