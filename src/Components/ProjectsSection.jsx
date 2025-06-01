import Box from '@mui/material/Box';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

import Title from './Title';
import { CardBlank, Card0, Card1, Card2, Card3, Card4, Card5 } from './Cards';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
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

  useGSAP(() => {
    gsap.fromTo(
      "#projects-title",
      { 
        scale: 1,
      },
      {
        padding: "16px 72px",
        borderRadius: "0px",
        scrollTrigger: {
          trigger: "#projects-section",
          start: "top 15%",
          end: "top top",
          scrub: 0.8
        }
      }
    );
  }, []);

  const [ index, setIndex ] = useState(-1);
  const [ cardArray, setCardArray ] = useState([-1, 0, 1, 2, 3, 4]);
  const Cards = () => {
    return cardArray.map(idx => {
      if (idx == -1) {
        return (
          <CardBlank key="card-blank" />
        )
      } else if (idx == 0) {
        return (
          <Card0 key="card-0" />
        )
      } else if (idx == 1) {
        return (
          <Card1 key="card-1" />
        )
      } else if (idx == 2) {
        return (
          <Card2 key="card-2" />
        )
      } else if (idx == 3) {
        return (
          <Card3 key="card-3" />
        )
      } else if (idx == 4) {
        return (
          <Card4 key="card-4" />
        )
      } else if (idx == 5) {
        return (
          <Card5 key="card-5" />
        )
      } else {
        return;
      }
      
    })
  }

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 6; ++i) {
      arr.push((index + i) % 6);
    }

    setCardArray(arr);
  }, [index]);

  const goLeft = () => {
    if (index == -1) {
      return;
    } else {
      setIndex(index - 1);
    }
  }

  const goRight = () => {
    setIndex(index + 1);
  }

  return (
    <Box id="projects-section" className="section" sx={{
      backgroundColor: "#f19b9a",
      width: "100%",
      height: "100vh",
      borderRadius: "64px",
      overflow: "hidden"
    }}>
      <Title id="projects-title">
        Projects
      </Title>
      <Box id="projects-container" sx={{
        padding: "40px 64px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px"
      }}>
        <Cards />
      </Box>
      <Box id="card-container-buttons" sx={{
        position: "absolute",
        right: "4vw",
        bottom: "2.5vh",
        display: "flex", 
        gap: "0.8vw"
      }}>
        <LeftButton 
          className={index == -1 ? "btn btn-secondary disabled" : "btn btn-secondary"}
          onClick={goLeft}
        />
        <RightButton 
          className="btn btn-secondary"
          onClick={goRight}
        />
      </Box>
    </Box>
  )
}

export default ProjectsSection
