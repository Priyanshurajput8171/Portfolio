import AboutMe from "../Componets/AboutMe"
import { ContactSection } from "../Componets/ContactSection"
import { Footer } from "../Componets/Footer"
import HeroSection from "../Componets/HeroSection"
import Navbar from "../Componets/Navbar"
import ProjectsSection from "../Componets/ProjectsSection"
import SkillsSection from "../Componets/SkillsSection"
import StarBackground from "../Componets/StarBackground"
import { ThemeToggle } from "../Componets/ThemeToggle"


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Theme Toggle*/}
      <ThemeToggle/>
      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
