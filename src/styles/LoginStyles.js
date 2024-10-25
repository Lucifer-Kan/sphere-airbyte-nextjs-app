import { LoadingButton } from "@mui/lab";
import { styled, Stack, TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const MainContainer = styled(Stack)(({ theme }) => ({
  backgroundImage:
    "url(https://sphere-public.s3.eu-west-2.amazonaws.com/login-background.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#000",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px 0px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "80px 100px",
  textAlign: "center",
  borderRadius: "4px",
  alignItems: "center",
  color: "#000",
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  height: "1px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "100%",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#1D1B20 !important",
  borderColor: "#79747E",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#79747E",
    },
    "&:hover fieldset": {
      borderColor: "#79747E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#79747E",
    },
    "& input": {
      color: "#1D1B20",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#79747E",
  },
  "& .MuiInputLabel-outlined": {
    "&.Mui-focused": {
      color: "#79747E",
    },
  },
}));

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  color: "#fff",
  textTransform: "none",
  fontSize: "16px",
  background:
    "linear-gradient(89.26deg, #7E3FB1 11.79%, #9D4EDD 86.99%) !important",
  [theme.breakpoints.down("md")]: {
    padding: "12px 8px",
  },
}));

export const StyledBackButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.54)",
  textTransform: "none",
  fontSize: "16px",
  background: "#F6F7F8",
  "&:hover": {
    color: "rgba(0, 0, 0, 0.7)",
    background: "#D5D6D8",
  },
  [theme.breakpoints.down("md")]: {
    padding: "12px 8px",
  },
}));

export const SignInText = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  color: "#9D4EDD",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "32px",
  width: "150",
  marginBottom: "30px",
}));

export const DividerStack = styled(Stack)(({ theme }) => ({
  width: "400px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const FormStack = styled(Stack)(({ theme }) => ({
  width: "400px",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
