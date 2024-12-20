
import Hero from "../components/main/Hero";
import TeamGrid from "../components/main/TeamGrid";
import Service from "../components/main/Service"
import Achievements from "../components/main/Achievements";

export default function Home() {
  return (
    <main className='h-full w-full pt-[20px]'>
      <div className='flex flex-col gap=20'>
         <Hero />
         <Service />
         <TeamGrid />
         <Achievements/>
      </div>
      
    </main>
  );
}
