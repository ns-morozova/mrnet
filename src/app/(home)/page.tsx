import { HeroSection, PersonalSettings, Technology } from "@/sections/home";

const HomePage = () => (
  <div className="flex flex-col gap-11 md:gap-18">
    <HeroSection />
    <Technology />
    <PersonalSettings />
  </div>
);

export default HomePage;
