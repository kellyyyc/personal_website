import Box from '@mui/material/Box';

function Title({ children, ...props }) {
  return (
    <Box className="title" sx={{
      fontSize: "48px",
      padding: "48px 72px"
    }} {...props}>
      {children}
    </Box>
  );
}

export default Title;
