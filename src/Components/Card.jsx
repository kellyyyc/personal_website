import Box from '@mui/material/Box';

import ExpandButton from './ExpandButton';
import '../App.css';
import { px } from 'motion';

function Card({ visibility="visible", backgroundImage, textColour="#ffffff", children, ...props }) {
  return (
    <>
      <Box sx={{
        borderRadius: "32px",
        height: "76vh",
        width: "360px",
        backgroundColor: "#ffffff",
        flexGrow: 0, 
        flexShrink: 0,
        visibility: visibility,
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "32px",
        position: "relative",
        color: textColour
      }} {...props}>
        {children}
        <ExpandButton onClick={() => {alert(1)}} sx={{
          position: "absolute",
          height: "32px",
          width: "32px",
          right: "24px",
          bottom: "24px"
        }}/>
      </Box>
    </>
  )
}

export default Card