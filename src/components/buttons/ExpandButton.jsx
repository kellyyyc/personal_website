import Box from '@mui/material/Box';

function ExpandButton({ onClick, ...props }) {
  return (
    <Box {...props}>
      <Box id="expand-card-button" component="button" type="button" tabIndex="-1"
        onClick={onClick}
        sx={{
          borderRadius: "50%",
          height: "32px",
          width: "32px",
          padding: 0,
          border: 0,
          backgroundColor: "transparent",
          "&:hover svg line": {
            stroke: "#ffffff"
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#3f3f3f" />
          <line x1="10" y1="16" x2="22" y2="16" stroke="#bbbbbb" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="10" x2="16" y2="22" stroke="#bbbbbb" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Box>
    </Box>
  );
}

export default ExpandButton