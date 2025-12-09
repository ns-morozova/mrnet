import { HeroSection, PersonalSettings } from "@/sections/home";

const HomePage = () => (
  <div className="flex flex-col gap-11 md:gap-18">
    <HeroSection />
    <PersonalSettings />
  </div>
);

export default HomePage;
