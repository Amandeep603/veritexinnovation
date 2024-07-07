import React from "react";
import AchievementCard from "../sub/AchievementCard";

const Achievements = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="achievements"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Achievements
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        <AchievementCard
          src="/opju nif.jpg"
          title="Best Innovator Award"
          description="Awarded for outstanding innovation in IoT and Robotics at the TechCon 2023."
        />
        <AchievementCard
          src="/NI.jpg"
          title="Excellence in AI"
          description="Recognized for exceptional contributions to AI research and development."
        />
        <AchievementCard
          src="/certificate3.jpg"
          title="Top Robotics Engineer"
          description="Honored as the top robotics engineer for groundbreaking work in automation."
        />
        <AchievementCard
          src="/certificate4.jpg"
          title="Industry Leadership"
          description="Acknowledged for leading industry initiatives and advancements in technology."
        />
        <AchievementCard
          src="/certificate5.jpg"
          title="Innovation Excellence"
          description="Received for demonstrating excellence in innovative product development."
        />
        <AchievementCard
          src="/certificate6.jpg"
          title="Tech Pioneer"
          description="Celebrated as a pioneer in technology for cutting-edge research and development."
        />
        <AchievementCard
          src="/certificate7.jpg"
          title="Outstanding Achievement"
          description="Awarded for outstanding achievements and contributions to the tech industry."
        />
        <AchievementCard
          src="/certificate8.jpg"
          title="Research Excellence"
          description="Recognized for significant contributions to scientific research and development."
        />
      </div>
    </div>
  );
};

export default Achievements;
