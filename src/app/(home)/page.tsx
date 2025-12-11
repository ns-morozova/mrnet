import {
    HeroSection,
    Clients,
    Technology,
    Summation,
    PersonalSettings,
    Solution,
    TestDrive,
    Connection,
    ApplicationForm
} from "@/sections/home";

const HomePage = () => (
  <div className="flex flex-col gap-11 md:gap-18">
    <HeroSection />
    <Clients />
    <Technology />
    <Summation />
    <PersonalSettings />
    <Solution />
    <TestDrive />
    <Connection />
    <ApplicationForm />
  </div>
);

export default HomePage;
