import { Stack, Box, styled, Button } from "@mui/material";

export const ModalStack = styled(Stack)(({ theme }) => ({
  padding: "80px 100px",
  justifyContent: "center ",
  alignItems: "center",
  maxWidth: "700px",
  [theme.breakpoints.down("md")]: {
    padding: "10px 10px",
  },
}));
