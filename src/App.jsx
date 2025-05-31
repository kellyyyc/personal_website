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
  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
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
        <WelcomeSection scrollYProgress={scrollYProgress} />
        <AboutSection scrollYProgress={scrollYProgress} />
      </Box>
      <Spacer sx={{ height: "100px" }}/>
      <ProjectsSection />
    </>
  )
}

export default App
