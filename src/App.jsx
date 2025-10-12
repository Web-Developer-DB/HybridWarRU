import Header from './components/Header.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import DefinitionSection from './components/sections/DefinitionSection.jsx';
import BuildingBlocksSection from './components/sections/BuildingBlocksSection.jsx';
import CaseStudiesSection from './components/sections/CaseStudiesSection.jsx';
import CurrentSituationSection from './components/sections/CurrentSituationSection.jsx';
import BotFarmsSection from './components/sections/BotFarmsSection.jsx';
import FalseFlagSection from './components/sections/FalseFlagSection.jsx';
import DronesSection from './components/sections/DronesSection.jsx';
import DetectionSection from './components/sections/DetectionSection.jsx';
import CitizenSection from './components/sections/CitizenSection.jsx';
import SourcesSection from './components/sections/SourcesSection.jsx';
import FaqSection from './components/sections/FaqSection.jsx';
import FooterSection from './components/sections/FooterSection.jsx';
import { navItems } from './data/content.js';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header navItems={navItems} />
      <main id="main">
        <HeroSection />
        <DefinitionSection />
        <BuildingBlocksSection />
        <CaseStudiesSection />
        <CurrentSituationSection />
        <BotFarmsSection />
        <FalseFlagSection />
        <DronesSection />
        <DetectionSection />
        <CitizenSection />
        <SourcesSection />
        <FaqSection />
      </main>
      <FooterSection year={currentYear} />
    </>
  );
}
