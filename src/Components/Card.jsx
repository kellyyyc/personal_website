import Box from '@mui/material/Box';

import ExpandButton from './ExpandButton';
import '../App.css';

function Card({ visibility="visible", backgroundImage, textColour="#ffffff", children, ...props }) {
  return (
    <>
      <Box 
        onClick={() => {alert(1)}}
        sx={{
          borderRadius: "32px",
          height: "77vh",
          width: "376px",
          backgroundColor: "#ffffff",
          flexGrow: 0, 
          flexShrink: 0,
          visibility: visibility,
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "32px",
          position: "relative",
          color: textColour,
          transform: "scale(1)",
          transition: "all 250ms ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.02)",
          }
        }} 
        {...props}
      >
        {children}
        <ExpandButton sx={{
          position: "absolute",
          height: "32px",
          width: "32px",
          right: "24px",
          bottom: "24px",
                    
        }}/>
      </Box>
    </>
  )
}

export default Card