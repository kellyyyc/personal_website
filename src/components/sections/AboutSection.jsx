import Box from '@mui/material/Box';
import { useTransform, motion } from "framer-motion";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Title from '../Title';

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress , [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [7, 0]);

  useGSAP(() => {
    gsap.fromTo(
      ".scroll-shrink",
      { 
        scale: 1,
        borderRadius: "0px",
      },
      {
        scale: 0.9,
        borderRadius: "64px",
        scrollTrigger: {
          trigger: "#about-section",
          start: "0 top",
          end: "+=300",
          scrub: 0.8
        }
      }
    );
  }, []);

  return (
    <Box id="about-section" className="section" component={motion.div} style={{scale, rotate}}>
      <Box className="scroll-shrink"
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#c0ceed",
          display: "block",
          objectFit: "cover",
          bottom: 0,
          position: "relative",
          marginBottom: "96px"
        }}
      >
        <Title>
          About
        </Title>
        <Box sx={{ padding: "64px", fontSize: "32px", width: "50%" }}>
          Hi, I'm a computer science major. Bleh Bleh Bleh Bleh Bleh
        </Box>
        <Box
          component="img"
          id="cat-gif"
          src="src/assets/cat.gif"
          sx={{
            position: "absolute",
            bottom: "-150px",
            right: "150px",
            pointerEvents: "none",
            userSelect: "none"
          }}
        />
      </Box>
    </Box>
  );
}

export default AboutSection
