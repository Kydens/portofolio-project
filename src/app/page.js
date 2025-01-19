import Image from "next/image";
import { 
  DashboardHome, 
  DashboardAboutMe,
  DashboardProject,
  DashboardFooter,
} from "@/components";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-24 px-8 pb-16">
        <div id="home">
          <DashboardHome />
        </div>

        <div id="about" style={{ paddingTop: '100px', marginTop: '-100px' }}>
          <DashboardAboutMe />
        </div>

        <div id="projects" style={{ paddingTop: '100px', marginTop: '-100px' }}>
          <DashboardProject />
        </div>
      </main>
    
      <div id="contact">
        <DashboardFooter />
      </div>
    </div>
  );
}
