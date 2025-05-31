import Box from '@mui/material/Box';

import Navbar from './Components/Navbar';
import ScrollShrink from './Components/ScrollShrink';
import Title from './Components/Title';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Box className="page" sx={{
        fontWeight: 500
      }}>
        <Title>
          Home
        </Title>
        <ScrollShrink />
        <Title>
          Projects
        </Title>

    
      </Box>
    </>
  )
}

export default App
