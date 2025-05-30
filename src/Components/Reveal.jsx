import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Box from '@mui/material/Box';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function Reveal() {
  useEffect(() => {
    gsap.fromTo(
      "#top",
      { 
        height: "100vh",
      },
      {
        height: 0,
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          markers: true
        }
      }
    );
  }, []);

  return (
    <Box id="top" sx={{
      height: "100vh",
      width: "100%",
      backgroundColor: "#000000",
      overflow: "hidden", 
      transition: "height 0.4s ease"
    }}>
      top
    </Box>
  )
}

export default Reveal