import { Box, Modal } from "@mui/material";
import React, { useState } from "react";

function LoginModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="modal-modal-title">Login Modal</h2>
        <p id="modal-modal-description">Contents of your login modal.</p>
      </Box>
    </Modal>
  );
}

export default LoginModal;
