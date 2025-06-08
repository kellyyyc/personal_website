import Box from '@mui/material/Box';

function Spacer({ sx }) {
  return (
    <Box className="spacer" sx={{ height: "24px", ...sx }} />
  );
}

export default Spacer;