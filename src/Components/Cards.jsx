import Box from '@mui/material/Box';

import Card from './Card';
import '../App.css';

export function CardBlank() {
  return (
    <Card visibility="hidden" />
  )
}

export function Card0() {
  return (
    <Card id="card-0" backgroundImage="url('src/assets/card0.jpg')" textColour="#000000"> 
      <Box sx={{ 
        fontSize: "16px"
        }}>
        Slide 1
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Pillars of Creation
      </Box>
    </Card>
  )
}

export function Card1() {
  return (
    <Card id="card-1" backgroundImage="url('src/assets/card1.jpg')"> 
      <Box sx={{ 
        fontSize: "16px"
        }}>
        Slide 2
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Lagoon Nebula
      </Box>
    </Card>
  )
}
export function Card2() {
  return (
    <Card id="card-2" backgroundImage="url('src/assets/card2.jpg')"> 
      <Box sx={{ fontSize: "16px" }}>
        Slide 3
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Westerlund 2 Cluster
      </Box>
    </Card>
  )
}

export function Card3() {
  return (
    <Card id="card-3" backgroundImage="url('src/assets/card3.jpg')"> 
      <Box sx={{ fontSize: "16px" }}>
        Slide 4
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Monkey Head Nebula
      </Box>
    </Card>
  )
}

export function Card4() {
  return (
    <Card id="card-4" backgroundImage="url('src/assets/card4.jpg')"> 
      <Box sx={{ fontSize: "16px" }}>
        Slide 5
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Antennae Galaxies
      </Box>
    </Card>
  )
}

export function Card5() {
  return (
    <Card id="card-5" backgroundImage="url('src/assets/card5.jpg')"> 
      <Box sx={{ fontSize: "16px" }}>
        Slide 6
      </Box>
      <Box sx={{ fontSize: "28px" }}>
        The Ring Nebula
      </Box>
    </Card>
  )
}