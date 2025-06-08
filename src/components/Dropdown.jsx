import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useLenis } from '../context/LenisContext';

function Dropdown() {
  const { scrollTo } = useLenis();

  return (
    <Box component="li" className="nav-item dropdown-container"
      sx={{
        position: "relative",
        display: "inline-block",
        "&:hover": {
          "& .dropdown-content": {
            display: "block"
          }
        }
      }}
    >
      <Box className="dropdown-button"
        sx={{
          margin: "4px 0",
          "&:hover": {
            cursor: "default"
          }
        }}
      >
        Projects
        <ArrowDropDownIcon fontSize="small" />
      </Box>
      <Card variant="outlined" className="dropdown-content"
        sx={{
          display: "none",
          position: "absolute",
          backgroundColor: "#ffffff",
          minWidth: "184px",
          padding: "6px",
          fontSize: "15px",
          borderRadius: "8px",
          zIndex: 1,
          "& .hoverable": {
            borderRadius: "8px",
            color: "#414141",
            padding: "12px 16px",
            textDecoration: "none",
            display: "block",
            "&:hover": {
              color: "#000000",
              backgroundColor: "#f2f2f2"
            }
          }
        }}
      >
        <Box className="hoverable" 
          onClick={() => scrollTo("#projects-section")} 
          sx={{ color: "#414141" }}
        >
          Overview
        </Box>
        <a className="hoverable" href="/projects/webtrack-extension">WebTrack Extension</a>
        <a className="hoverable" href="/projects/stock-tracker">Stock tracker</a>
      </Card>
    </Box>
  );
}

export default Dropdown