import Box from '@mui/material/Box';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

import Title from '../Title';
import ProjectCard from '../ProjectCard';
import LeftButton from '../buttons/LeftButton';
import RightButton from '../buttons/RightButton';

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection({ setModalContent, openModal }) {
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

  const loadCard = (idx) => {
    let cardContent = {
      name: "",
      title: "",
      summary: "",
      image: ""
    };
    switch (idx) {
      case -1:
        return (
          <ProjectCard key="card-blank" visibility="hidden" />
        );
      case 0:
        cardContent.name = "webTrackExtension";
        cardContent.title = "WebTrack Extension";
        cardContent.summary = "Don't lose track of your time.";
        cardContent.image = "url('src/assets/card0.jpg')";
        return (
          <ProjectCard key="card-0" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      case 1:
        cardContent.name = "stockTracker";
        cardContent.title = "Stock Tracker";
        cardContent.summary = "Get the items you want.";
        cardContent.image = "url('src/assets/card1.jpg')";
        return (
          <ProjectCard key="card-1" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      case 2:
        cardContent.name = "defaultProject";
        cardContent.title = "Slide 3";
        cardContent.summary = "The Westerlund 2 Cluster";
        cardContent.image = "url('src/assets/card2.jpg')";
        return (
          <ProjectCard key="card-2" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      case 3:
        cardContent.name = "defaultProject";
        cardContent.title = "Slide 4";
        cardContent.summary = "The Monkey Head Nebula";
        cardContent.image = "url('src/assets/card3.jpg')";
        return (
          <ProjectCard key="card-3" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      case 4:
        cardContent.name = "defaultProject";
        cardContent.title = "Slide 5";
        cardContent.summary = "The Antennae Galaxies";
        cardContent.image = "url('src/assets/card4.jpg')";
        return (
          <ProjectCard key="card-4" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      case 5:
        cardContent.name = "defaultProject";
        cardContent.title = "Slide 6";
        cardContent.summary = "The Ring Nebula";
        cardContent.image = "url('src/assets/card5.jpg')";
        return (
          <ProjectCard key="card-5" cardContent={cardContent} setModalContent={setModalContent} openModal={openModal} />
        );
      default:
        return null;
    }
  };

  const [ index, setIndex ] = useState(-1);
  const [ cardArray, setCardArray ] = useState([-1, 0, 1, 2, 3, 4]);
  const Cards = () => {
    return cardArray.map(idx => loadCard(idx))
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
    <Box id="projects-section" className="section"
      sx={{
        backgroundColor: "#f19b9a",
        width: "100%",
        height: "100vh",
        borderRadius: "64px",
        overflow: "hidden"
      }}
    >
      <Title id="projects-title">
        Projects
      </Title>
      <Box id="projects-container"
        sx={{
          padding: "40px 64px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px"
        }}
      >
        <Cards />
      </Box>
      <Box id="card-container-buttons"
        sx={{
          position: "absolute",
          right: "4vw",
          bottom: "2.5vh",
          display: "flex", 
          gap: "0.8vw"
        }}
      >
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
  );
}

export default ProjectsSection