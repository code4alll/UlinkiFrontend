import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Alert, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GetAppIcon from '@mui/icons-material/GetApp';
import UploadView from './UploadView'; // assuming you have an UploadView component

function UploadViewRun({ modal, setModal, closeModal,categoryPath,triggerSheetDownload }) {
  const [triggerDownload, setTriggerDownload] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [status1, setStatus1] = useState(null);

  // Styles for the dialog components
  const styles = {
    title: {
      borderBottom: "1px solid #e0e0e0", 
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "5px",
      maxWidth: "40px",
      minHeight: "30px",
      minWidth: "30px",
      borderRadius: "50%",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
    closeButton1: {
      position: "absolute",
      top: "12px",
      right: "42%",
      maxWidth: "40px",
      minHeight: "30px",
      minWidth: "30px",
      borderRadius: "50%",
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
    content: {
      marginTop: "20px",
      "&.custom-scrollbar": {
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#ccc transparent",
      },
    },
  };

  // Handle upload status change
  const handleUploadStatusChange = (status) => {
    if (status === "success") {
      setMessage("Upload Successful");
      setStatus1("success");
    } else if (status === "error") {
      setMessage("Upload Failed With Error");
      setStatus1("error");
    } else if (status === "warning") {
      setMessage("Warning on Upload");
      setStatus1("warning");
    } else {
      setMessage(null);
      setStatus1(null);
    }
  };

  return (
    <div>
      <Dialog open={modal} onClose={closeModal} maxWidth="lg" fullWidth className="dialog-container custom-scrollbar">
        <DialogTitle sx={styles.title} className="dialog-header">
          {"Product Upload"}
          
          {message === "Upload Failed With Error" && (
            <>
              <div style={{ display: "flex", right: "46%", position: "absolute", color: "red" }}>
                <Alert severity="error" sx={{ background: "transparent" }}>
                  {message}
                </Alert>
              </div>
              <Tooltip title="Download Error file">
                <Button
                  edge="end"
                  color="inherit"
                  onClick={() => {}}
                  aria-label="close"
                  sx={styles.closeButton1}
                >
                  <GetAppIcon />
                </Button>
              </Tooltip>
            </>
          )}

          {message === "Upload Successful" && (
            <div style={{ display: "flex", right: "46%", position: "absolute", color: "green" }}>
              <Alert severity="success" sx={{ background: "transparent" }}>
                {message}
              </Alert>
            </div>
          )}

          {message === "Warning on Upload" && (
            <div style={{ display: "flex", right: "46%", position: "absolute", color: "green" }}>
              <Alert severity="warning" sx={{ background: "transparent" }}>
                {message}
              </Alert>
            </div>
          )}

          <Button edge="end" color="inherit" onClick={closeModal} aria-label="close" sx={styles.closeButton}>
            <CloseIcon />
          </Button>
        </DialogTitle>

        <DialogContent sx={styles.content}>
          <UploadView
            selectedState={selectedState}
            onUploadStatusChange={handleUploadStatusChange}
            shouldTriggerDownload={triggerDownload}
            resetTriggerDownload={() => setTriggerDownload(!triggerDownload)}
            triggerUploadSheet={()=>triggerSheetDownload}
            category={categoryPath}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UploadViewRun;
