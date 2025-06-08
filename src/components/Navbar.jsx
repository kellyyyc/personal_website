import Box from '@mui/material/Box';

import Dropdown from './Dropdown';
import { useLenis } from '../context/LenisContext';

function Navbar() {
  const { scrollTo } = useLenis();

  return (
    <Box id="navbar" 
      sx={{
        height:"48px",
        display: "flex",
        padding: "0 24px",
        alignContent: "center",
        backgroundColor: "#f8f8f8",
        "@media (max-width: 600px)": {
          padding: "0 16px"
        }
      }}
    >
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Box className="navbar-brand"
          sx={{
            "&:hover": {
              cursor: "default"
            }
          }}
        >
          Kelly's Website
        </Box>
        <Box component="ul" className="navbar-nav mr-auto"
          sx={{
            display: "flex",
            gap: "8px",
            color: "#414141",
            "& *:hover": {
              color: "#000000",
              cursor: "pointer"
            }
          }}
        >
          <Box component="li" className="nav-item active" sx={{ margin: "4px 0" }}>
            <Box component="a" href="/" sx={{ color: "#414141", textDecoration: "none", padding: "0px" }}>
              Home
            </Box>
          </Box>
          <Box component="li" className="nav-item" 
            onClick={() => scrollTo("#about-section")}
            sx={{ margin: "4px 0" }}
          >
            About
          </Box>
          <Dropdown  />
        </Box>
      </nav>
    </Box>
  );
}

export default Navbar