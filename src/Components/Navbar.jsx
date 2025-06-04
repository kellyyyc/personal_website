import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar({scrollToSections}) {
  const [ menuLeftPos, setMenuLeftPos ] = useState(0);
  const menuRef = useRef(null);
  const handleOpen = (event) => {
    const rect = menuRef.current.getBoundingClientRect();
    setMenuLeftPos(rect.left);
    setShow(true);
  };

  const [ show, setShow ] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Box id="navbar" sx={{
      height:"48px",
      display: "flex",
      padding: "0 24px",
      alignContent: "center",
      backgroundColor: "#f8f8f8"
    }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Kelly's Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Box component="li" className="nav-item" sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}>
                <a className="nav-link active">Home</a>
              </Box>
              <Box component="li" className="nav-item" sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}>
                <div className="nav-link active" onClick={() => {scrollToSections.scrollToAboutSection()}}>About</div>
              </Box>
              <Box component="li" className="nav-item" sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}>
                <span className="nav-link active" onClick={() => {scrollToSections.scrollToProjectsSection()}}>Projects</span>
              </Box>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/stock-tracker">Stock tracker</a></li>
                  <li><a className="dropdown-item" href="/webtrack-extension">WebTrack Extension</a></li>
                </ul>
              </li>
              <Box component="li" className="nav-item" sx={{
                "&:hover": {
                  cursor: "pointer"
                }
              }}>
                <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  Dashboard
                </span>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/stock-tracker">Stock tracker</a></li>
                  <li><a className="dropdown-item" href="/webtrack-extension">WebTrack Extension</a></li>
                </ul>
              </li>
              </Box>
              {/* <li className="nav-item active">
                  <Box component="div" className="nav-link active"
                    ref={menuRef}
                    onMouseOver={handleOpen}
                    onMouseLeave={handleClose}
                  >
                    Dashboard
                    {
                      <Box sx={{
                        position: "absolute",
                        backgroundColor: "white",
                        top: "48px",
                        left: `${menuLeftPos - 24}px`,
                      }}>
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Box>
                    }
                  </Box>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial> */}
    </Box>
  )
}

export default Navbar