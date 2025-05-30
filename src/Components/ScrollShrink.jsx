import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Box from '@mui/material/Box';
import gsap from 'gsap';

import Title from './Title';

gsap.registerPlugin(ScrollTrigger);

function ScrollShrink() {
  useEffect(() => {
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
          trigger: "#about",
          start: "top top",
          end: "+=300",
          scrub: 0.8
        }
      }
    );
  }, []);

  return (
    <>
      <Title id="about">
        About
      </Title>
      <Box className="scroll-shrink"
        sx={{
          width: "100%",
          height: "calc(100vh - 168px)",
          backgroundColor: "#c0ceed",
          padding: "64px",
          display: "block",
          objectFit: "cover",
          bottom: 0,
          position: "relative"
        }}
      >
        <Box
          sx={{
            fontSize: "32px",
            width: "50%"
          }}
        >
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
          }}
        />
      </Box>
    </>
  )
}

export default ScrollShrink