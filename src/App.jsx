import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Lenis from 'lenis';
import { useScroll } from "framer-motion";

import WelcomeSection from './Components/WelcomeSection';
import AboutSection from './Components/AboutSection';
import Spacer from './Components/Spacer';
import ProjectsSection from './Components/ProjectsSection';
import './App.css';

function App() {
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);

  const scrollToSections = {
    scrollToAboutSection: () => {
      aboutSection.current.scrollIntoView();
    },
    scrollToProjectsSection: () => {
      projectsSection.current.scrollIntoView();
    },
    scroll: null
  }
  
  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    scrollToSections.scroll = (target) => {
      lenis.scrollTo(target);
    };
  }, [])

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["100px start", "end end"]

  })

  return (
    <>
      <Box ref={container} sx={{
        height: "195vh"
      }}>
        <WelcomeSection scrollYProgress={scrollYProgress} scrollToSections={scrollToSections}/>
        <Box ref={aboutSection}>
          <AboutSection scrollYProgress={scrollYProgress} />
        </Box>
      </Box>
      <Spacer sx={{ height: "100px" }}/>
      <Box ref={projectsSection}>
        <ProjectsSection />
      </Box>
    </>
  )
}

export default App
