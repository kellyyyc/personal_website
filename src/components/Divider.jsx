import Box from '@mui/material/Box';

function Divider({ color="#cccccc" }) {
  return (
    <Box sx={{ borderTop: `1px solid ${color}` }} />
  );
}

export default Divider