import { useState, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Box from '@mui/material/Box';

import './App.css'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.fromTo(
      ".scroll-shrink",
      { 
        scale: 1,
        borderRadius: "0px",
      },
      {
        scale: 0.9,
        borderRadius: "64px",
        scrollTrigger: {
          trigger: "#navbar",
          start: "top top",
          end: "+=300",
          scrub: 0.8
        }
      }
    );
  }, []);

  return (
    <>
      <div>
        <Box id="navbar" sx={{
          height:"48px",
          display: "flex",
          padding: "0 24px",
          alignContent: "center"
        }}>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Kelly's Website</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Projects
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Stock tracker</a></li>
                      <li><a className="dropdown-item" href="#">WebTrack Extension</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Box>
      </div>
      <div className="page">
        <div className="title">
          Home
        </div>
        <Box>
          {/* <img className="scroll-shrink" src="src/assets/car.png" /> */}
          <Box className="scroll-shrink"
            sx={{
              width: "100%",
              height: "calc(100vh - 216px)",
              backgroundColor: "#c0ceed",
              padding: "64px"
            }}
          >
            <Box
              sx={{
                fontSize: "32px",
                width: "50%",
                fontWeight: "500"
              }}
            >
              Hi, I'm a computer science major. Bleh Bleh Bleh Bleh Bleh
            </Box>
            <img id="cat-gif" src="src/assets/cat.gif" /> 
          </Box>
        </Box>
        <div className="title">
          Projects
        </div>
      </div>
    </>
  )
}

export default App
