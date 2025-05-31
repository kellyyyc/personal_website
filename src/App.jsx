import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from "framer-motion";

import Navbar from './Components/Navbar';
import ScrollShrink from './Components/ScrollShrink';
import Title from './Components/Title';
import './App.css';
import Spacer from './Components/Spacer';

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

  const { scrollYProgress  } = useScroll({
    target: container,
    offset: ["start start", "end end"]

  })

  const Section1 = () => {
    const scale = useTransform(scrollYProgress , [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress , [0, 1], [0, -10]);

    return (
      <Box id="welcome-section" component={motion.div} style={{scale, rotate}} className="section" sx={{

      }}>
        <Navbar />
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 48px)",
          backgroundColor: "#aae3ac"
        }}>
          
          <Box sx={{
            alignContent: "center",
            fontSize: "48px"
          }}>
            Welcome
          </Box>
        </Box>
      </Box>
    )
  }

  const Section2 = () => {
    const scale = useTransform(scrollYProgress , [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);

    return (
      <Box component={motion.div} style={{scale, rotate}}>
        <Box id="about-section" className="section">
          <ScrollShrink />
        </Box>
        <Spacer sx={{ height: "48px" }}/>
        <Box id="project-section" className="section" sx={{
          backgroundColor: "#f19b9a"
        }}>
          <Title>
            Projects
          </Title>
        </Box>
      </Box>
      
    )
  }

  return (
    <>
      <Box ref={container} sx={{
        height: "200vh"
      }}>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </Box>
    </>
  )
}

export default App
