import Box from '@mui/material/Box';

function Title({ children }) {
  return (
    <Box className="title" sx={{
        fontSize: "48px",
        margin: "48px 72px"
    }}>
      {children}
    </Box>
  );
}

export default Title;
