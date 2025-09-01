import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { useScroll } from "framer-motion";

import WelcomeSection from "../components/sections/WelcomeSection";
import AboutSection from "../components/sections/AboutSection";
import Spacer from "../components/Spacer";
import ProjectsSection from "../components/sections/ProjectsSection";
import ProjectModal from "../components/ProjectModal";

function HomePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["100px start", "end end"],
  });

  const [modalContent, setModalContent] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box ref={container} sx={{ height: "195vh", position: "relative" }}>
        <WelcomeSection scrollYProgress={scrollYProgress} />
        <AboutSection scrollYProgress={scrollYProgress} />
      </Box>
      <Spacer sx={{ height: "100px" }} />
      <ProjectsSection
        setModalContent={setModalContent}
        openModal={handleOpen}
      />
      <ProjectModal
        modalContent={modalContent}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default HomePage;
