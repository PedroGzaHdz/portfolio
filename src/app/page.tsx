import HeaderMain from "@/components/main/header";
import AboutMe from "@/components/main/about_me";
import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/main/portfolioSection";
import WorkProcess from "@/components/main/howTheProcessOfWork";

export default function Home() {
  return (
      <main className="container ">
        <Navbar/>
        <HeaderMain/>
        <AboutMe />
        <PortfolioSection />
        <WorkProcess />
      </main>
  );
}
