import Box from '@mui/material/Box';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Title from './Title';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  useGSAP(() => {
    gsap.fromTo(
      "#projects-section",
      { 
        scale: 0.9,
      },
      {
        scale: 1,
        borderRadius: "0px",
        scrollTrigger: {
          trigger: "#projects-section",
          start: "top 60%",
          end: "+=450",
          scrub: 0.8
        }
      }
    );
  }, []);

  return (
    <Box id="projects-section" className="section" sx={{
      backgroundColor: "#f19b9a",
      width: "100%",
      height: "100vh",
      borderRadius: "64px",
      overflow: "hidden"
    }}>
      <Title>
        Projects
      </Title>
      <Box id="projects-container" >

      </Box>
    </Box>
  )
}

export default ProjectsSection
