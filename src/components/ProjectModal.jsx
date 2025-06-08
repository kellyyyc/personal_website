import Box from '@mui/material/Box';;
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import WebTrackExtensionModal from '../components/modals/WebTrackExtensionModal';
import StockTrackerModal from './modals/StockTrackerModal';
import DefaultModal from './modals/DefaultModal';

function ProjectModal({ modalContent, open, handleClose }) {
  const renderModalContent = () => {
    switch (modalContent) {
      case "webTrackExtension":
        return <WebTrackExtensionModal />;
      case "stockTracker":
        return <StockTrackerModal />;
      case "defaultProject":
        return <DefaultModal />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          }
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "90%",
              borderRadius: "24px",
              padding: "48px",
              backgroundColor: "white",
              outline: "none"
            }}
          >
            {renderModalContent()}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ProjectModal