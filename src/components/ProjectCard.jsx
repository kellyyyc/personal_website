import Box from "@mui/material/Box";

import { ExpandButton } from "./Buttons";

function ProjectCard({
  visibility = "visible",
  title,
  summary,
  image,
  isInverted,
  setModalContent,
  openModal,
  children,
  ...props
}) {
  const setModal = () => {
    setModalContent(title);
    openModal();
  };

  return (
    <Box
      onClick={setModal}
      sx={{
        borderRadius: "32px",
        height: "77vh",
        width: "376px",
        backgroundColor: "#ffffff",
        flexGrow: 0,
        flexShrink: 0,
        visibility: visibility,
        backgroundImage: image ? image : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "32px",
        position: "relative",
        color: isInverted ? "#000000" : "#ffffff",
        transform: "scale(1)",
        transition: "all 250ms ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      {...props}
    >
      <Box sx={{ fontSize: "17px" }}>{title}</Box>
      <Box sx={{ fontSize: "28px" }}>{summary}</Box>
      {children}
      <ExpandButton
        sx={{
          position: "absolute",
          height: "32px",
          width: "32px",
          right: "24px",
          bottom: "24px",
        }}
      />
    </Box>
  );
}

export default ProjectCard;
