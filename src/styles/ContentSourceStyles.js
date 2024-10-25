import { Typography, styled, Stack, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  sourcesStack: {
    padding: "20px 30px",
    justifyContent: "space-between",
    color: "#000",
    alignItems: "center",
    borderRadius: "4px",
  },
  subscriptionButton: {
    width: "120px",
    height: "40px",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "14px",
    borderRadius: "4px",
    boxShadow:
      " 0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25)",
  },
  unsubscribeButton: {
    color: "rgba(0, 0, 0, 0.54)",
    backgroundColor: "#F6F7F8",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "#D4D6D7",
      color: "rgba(0, 0, 0, 0.74)",
    },
  },
  subscribeButton: {
    backgroundColor: "#EBF8F1",
    color: "#00AB55",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "#C9F5D8",
      color: "#007F3C",
    },
  },
  paymentProceedButton: {
    transition: "color 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#333",
    },
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  lineHeight: "120%",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));

export const StackHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "unset !important",
  fontSize: "24px",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const ContactUsHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "unset",
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "center",
}));

export const MainContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#000",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  minHeight: "100vh",
  paddingBottom: "50px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const CustomizedButton = styled(Button)(({ theme }) => ({
  fontFamily: "unset",
  background:
    "linear-gradient(89.26deg, #7E3FB1 11.79%, #9D4EDD 86.99%) !important",
  width: "120px",
  height: "45px",
  mixBlendMode: "normal",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",
}));

export const ContactusButton = styled(Button)(({ theme }) => ({
  fontFamily: "unset",
  background:
    "linear-gradient(89.26deg, #7E3FB1 11.79%, #9D4EDD 86.99%) !important",
  width: "120px",
  height: "45px",
  mixBlendMode: "normal",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));
