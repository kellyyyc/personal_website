import Box from '@mui/material/Box';

import Navbar from './Components/Navbar';
import ScrollShrink from './Components/ScrollShrink';
import Title from './Components/Title';
import './App.css';

function App() {
  return (
    <>
      <Box id="welcome-section" className="section">
        <Navbar />
        <Title>
          Home
        </Title>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 216px)",
          backgroundColor: "gray"
        }}>
          <Box sx={{
            alignContent: "center",
            fontSize: "48px"
          }}>
            WEclome
          </Box>
        </Box>
      </Box>
      <Box id="about-section" className="section">
        <Title>
          About
        </Title>
        <ScrollShrink />
      </Box>
      <Box id="project-section" className="section" sx={{
        height: "100vh"
      }}>
        <Title>
          Projects
        </Title>
      </Box>
    </>
  )
}

export default App
