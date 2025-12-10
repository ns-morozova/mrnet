import {
    HeroSection,
    Technology,
    Summation,
    PersonalSettings,
    Solution,
    TestDrive
} from "@/sections/home";

const HomePage = () => (
  <div className="flex flex-col gap-11 md:gap-18">
    <HeroSection />
    <Technology />
    <Summation />
    <PersonalSettings />
    <Solution />
    <TestDrive />
  </div>
);

export default HomePage;
