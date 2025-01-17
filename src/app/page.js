import Image from "next/image";
import { 
  DashboardHome, 
  DashboardAboutMe,
  DashboardProject,
  DashboardFooter,
} from "@/components";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-24 px-8 pb-16">
        <DashboardHome />
        <DashboardAboutMe />
        <DashboardProject />
      </main>
    
      <DashboardFooter />
    </>
  );
}
