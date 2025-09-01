import Box from "@mui/material/Box";
import { useTransform, motion } from "framer-motion";

import Navbar from "../Navbar";

function WelcomeSection({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -7]);

  return (
    <Box
      id="welcome-section"
      className="section"
      component={motion.div}
      style={{ scale, rotate }}
      sx={{ height: "100vh" }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 48px)",
          backgroundColor: "#aae3ac",
        }}
      >
        <Box
          sx={{ alignContent: "center", fontSize: "72px", color: "#000000" }}
        >
          Welcome
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomeSection;
