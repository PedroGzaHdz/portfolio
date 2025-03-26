import HeaderMain from "@/components/main/header";
import AboutMe from "@/components/main/about_me";
import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/main/portfolioSection";
import WorkProcess from "@/components/main/howTheProcessOfWork";
import InfoComponentService from "@/components/main/infoComponentService";
import ContactPage from "@/components/main/contact";
import PersonalExpertise from "@/components/main/personalExpertise";

export default function Home() {
  return (
      <main className="">
        <Navbar/>
        <HeaderMain/>
        <AboutMe />
        <PortfolioSection />
        <WorkProcess />
        <InfoComponentService />
        <PersonalExpertise />
        <ContactPage />
      </main>
  );
}
