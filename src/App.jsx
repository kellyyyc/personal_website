import Box from '@mui/material/Box';

import Navbar from './Components/Navbar';
import ScrollShrink from './Components/ScrollShrink';
import Title from './Components/Title';
import './App.css';

function App() {
  return (
    <>
      {/* <Box id="welcome-section" className="section" /> */}
      <Box id="about-section" className="section">
        <Navbar />
        <Title>
          Home
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
