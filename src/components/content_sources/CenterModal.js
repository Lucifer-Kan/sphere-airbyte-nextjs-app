import React, { useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalStack } from "components/styles/ModalStyles";
import { CustomizedButton } from "components/styles/ContentSourceStyles";
import { useStyles } from "components/styles/ContentSourceStyles";

const CenteredModal = ({
  open,
  onClose,
  unsubscribeContentSource,
  sourceName,
  sourceId,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState();

  const handleClick = async () => {
    setLoading(true);
    await unsubscribeContentSource(sourceId).then(() => {
      setLoading(false);
      onClose();
    });
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          width: { xs: "90%", sm: "85%", md: "50%" },
          borderRadius: "4px",
          p: 4,
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <ModalStack spacing={2.5}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              textAlign: "center",
              color: "#212B36",
            }}
          >
            Are you sure you want to unsubscribe from {sourceName}?
          </Typography>
          <CustomizedButton
            sx={{ width: "100%", marginTop: "40px !important" }}
            onClick={onClose}
          >
            Keep me subscribed
          </CustomizedButton>
          {loading ? (
            <CircularProgress
              sx={{
                color: "#000",
                width: "24px !important",
                height: "24px !important",
              }}
            />
          ) : (
            <Button
              className={`${classes.subscriptionButton} ${classes.unsubscribeButton}`}
              sx={{ width: "100% !important", height: "40px !important" }}
              onClick={handleClick}
            >
              Unsubscribe
            </Button>
          )}
        </ModalStack>
      </Box>
    </Modal>
  );
};

export default CenteredModal;
