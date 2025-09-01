import Box from "@mui/material/Box";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

import Title from "../Title";
import ProjectCard from "../ProjectCard";
import { LeftButton, RightButton } from "../Buttons";

const PROJECTS = [
  {
    title: "The Milk Project",
    summary: "Secure neonatal milk tracking system.",
    image: "/assets/milk_project_card.png",
    isInverted: false,
  },
  {
    title: "WebTrack Extension",
    summary: "Don't lose track of your time.",
    image: "/assets/google_extension_icon_card.png",
    isInverted: true,
  },
  {
    title: "Mobile Fitness App",
    summary: "Log workouts, track progress.",
    image: "/assets/mobile_health_app_card.png",
    isInverted: false,
  },
  {
    title: "Stock Tracker",
    summary: "Get the items you want.",
    image: "",
    isInverted: true,
  },
];

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
          scrub: 0.8,
        },
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
          scrub: 0.8,
        },
      }
    );
  }, []);

  const NUMBEROFCARDS = 6;
  const TOTAL = PROJECTS.length;

  const [index, setIndex] = useState(-1);
  const [cardArray, setCardArray] = useState(() => {
    const arr = [];
    for (let i = -1; i < NUMBEROFCARDS - 1; i++) {
      arr.push(i % TOTAL);
    }
    return arr;
  });

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < NUMBEROFCARDS; i++) {
      arr.push((i + index) % TOTAL);
    }
    setCardArray(arr);
  }, [index]);

  const goLeft = () => {
    if (index <= -1) {
      return;
    } else {
      setIndex(index - 1);
    }
  };

  const goRight = () => {
    setIndex(index + 1);
  };

  return (
    <Box
      id="projects-section"
      className="section"
      sx={{
        backgroundColor: "#f19b9a",
        width: "100%",
        height: "100vh",
        borderRadius: "64px",
        overflow: "hidden",
      }}
    >
      <Title id="projects-title">Projects</Title>
      <Box
        id="projects-container"
        sx={{
          padding: "40px 64px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {cardArray.map((idx, i) => {
          if (idx === -1) {
            return (
              <ProjectCard
                key={"card-blank"}
                visibility="hidden"
                title=""
                summary=""
                image=""
                isInverted={false}
                setModalContent={setModalContent}
                openModal={openModal}
              />
            );
          } else {
            const project = PROJECTS[idx];
            const backgroundImage = project.image
              ? `url('${project.image}')`
              : undefined;
            return (
              <ProjectCard
                key={`card-${i}`}
                title={project.title}
                summary={project.summary}
                image={backgroundImage}
                isInverted={project.isInverted}
                setModalContent={setModalContent}
                openModal={openModal}
              />
            );
          }
        })}
      </Box>
      <Box
        id="card-container-buttons"
        sx={{
          position: "absolute",
          right: "4vw",
          bottom: "2.5vh",
          display: "flex",
          gap: "0.8vw",
        }}
      >
        <LeftButton
          className={
            index == -1 ? "btn btn-secondary disabled" : "btn btn-secondary"
          }
          onClick={goLeft}
        />
        <RightButton className="btn btn-secondary" onClick={goRight} />
      </Box>
    </Box>
  );
}

export default ProjectsSection;
