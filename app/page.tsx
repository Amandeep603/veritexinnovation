
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Achievements";
// import Skills from "@/components/main/Skills";
import TeamGrid from "@/components/main/TeamGrid";
import Service from "@/components/main/Service"

import Image from "next/image";
import Achievements from "@/components/main/Achievements";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap=20'>
         <Hero />
         {/* <Skills /> */}
         <Service />
         <TeamGrid />
         {/* <Encryption /> */}
         <Achievements/>
         
         {/* <Projects /> */}
      </div>
      
    </main>
  );
}
