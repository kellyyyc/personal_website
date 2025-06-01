import Box from '@mui/material/Box';

function Navbar() {
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Projects</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/stock-tracker">Stock tracker</a></li>
                  <li><a className="dropdown-item" href="/webtrack-extension">WebTrack Extension</a></li>
                </ul>
              </li>
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