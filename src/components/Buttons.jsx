import Box from "@mui/material/Box";

const buttonStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0,
  borderRadius: "50%",
  height: 32,
  width: 32,
  padding: 0,
  border: 0,
  backgroundColor: "transparent",
  "& svg": { display: "block" },
};

export function ExpandButton({ onClick, ...props }) {
  return (
    <Box {...props}>
      <Box
        id="expand-card-button"
        component="button"
        type="button"
        tabIndex="-1"
        onClick={onClick}
        sx={{
          ...buttonStyles,
          "&:hover svg line": {
            stroke: "#ffffff",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="16" r="16" fill="#3f3f3f" />
          <line
            x1="10"
            y1="16"
            x2="22"
            y2="16"
            stroke="#bbbbbb"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="10"
            x2="16"
            y2="22"
            stroke="#bbbbbb"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </Box>
    </Box>
  );
}

export function LeftButton({ className, onClick }) {
  return (
    <>
      <Box
        id="left-card-container-button"
        component="button"
        type="button"
        className={className}
        onClick={onClick}
        sx={buttonStyles}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="16" fill="#e8e8e8" />
          <path
            d="M18 9 L11 16 L18 23"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </Box>
    </>
  );
}

export function RightButton({ className, onClick }) {
  return (
    <>
      <Box
        id="right-card-container-button"
        component="button"
        type="button"
        className={className}
        onClick={onClick}
        sx={buttonStyles}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="16" fill="#e8e8e8" />
          <path
            d="M14 9 L21 16 L14 23"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </Box>
    </>
  );
}
