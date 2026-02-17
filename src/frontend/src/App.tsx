import { HeroSection } from './components/portfolio/HeroSection';
import { AboutSection } from './components/portfolio/AboutSection';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { ExperienceTimelineSection } from './components/portfolio/ExperienceTimelineSection';
import { StatsCounterSection } from './components/portfolio/StatsCounterSection';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { ContactSection } from './components/portfolio/ContactSection';
import { BackgroundEffects } from './components/portfolio/BackgroundEffects';
import { TopNav } from './components/portfolio/TopNav';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <TopNav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimelineSection />
        <StatsCounterSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
