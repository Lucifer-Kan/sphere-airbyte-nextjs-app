import { Stack, Box, styled, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const StyledNavbar = styled(Box)(({ theme }) => ({
  height: "70px",
  width: "100%",
  padding: "40px 0 0 70px",
  backgroundColor: "#000",
  [theme.breakpoints.down("md")]: {
    padding: "20px 30px",
  },
}));

export const StyledWhiteNavbar = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: "50px",
  backgroundColor: "#fff",
  justifyContent: "space-between",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const NavbarButton = styled(LoadingButton)(({ theme }) => ({
  fontFamily: "unset",
  background: "#00A67E !important",
  mixBlendMode: "normal",
  padding: "10px 20px",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",
  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
  },
}));
