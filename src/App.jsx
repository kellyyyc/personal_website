import Box from '@mui/material/Box';

import Navbar from './Components/Navbar';
import ScrollShrink from './Components/ScrollShrink';
import Title from './Components/Title';
import Reveal from './Components/Reveal';
import './App.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Navbar />
      <Reveal />
      
      <Box className="page" sx={{
        fontWeight: 500
      }}>
        <ScrollShrink />
        <Title>
          Projects
        </Title>
      </Box>

      
    </>
  )
}

export default App
