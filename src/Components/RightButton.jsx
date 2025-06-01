import Box from '@mui/material/Box';

import '../App.css';

function RightButton({ className, onClick }) {
  return (
    <>
      <Box id="right-card-container-button" component="button" type="button" 
        className={className}
        onClick={onClick}
        sx={{
          borderRadius: "50%",
          height: "32px",
          width: "32px",
          padding: 0,
          border: 0
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#e8e8e8" />
          <path d="M14 9 L21 16 L14 23" stroke="gray" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </Box>
    </>
  )
}

export default RightButton