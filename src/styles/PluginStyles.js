import { LoadingButton } from "@mui/lab";
import {
  Button,
  Stack,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  styled
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

export const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  fontWeight: 500,
  lineHeight: "120%",
  color: "#fff",
  display: "inline",
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  padding: "10px 160px",
  color: "#fff",
  textTransform: "none",
  background:
    "linear-gradient(89.26deg, #7E3FB1 11.79%, #9D4EDD 86.99%) !important",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    width: "100%",
  },
}));

export const LoadingPurpleStack = styled(Stack)(({ theme }) => ({
  padding: "60px",
  width: "95%",
  maxWidth: "400px",
  borderRadius: "4px",
  minHeight: "250px",
  boxShadow: "0px 0px 80px rgba(157, 78, 221, 0.8)",
  [theme.breakpoints.down("md")]: {
    padding: "60px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "60px 20px",
  },
}));

export const LoadingStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "75%",
  maxWidth: "880px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const StyledListItem = styled("li")(({ theme }) => ({
  color: "#fff",
  "&:not(:last-child)": {
    marginBottom: "30px",
  },
  "&::marker": {
    color: "#9D4EDD",
    fontWeight: 500,
  },
}));

export const InstructionListItem = styled("li")(({ theme }) => ({
  color: "#E6E0E9",
  marginLeft: "16px",
  "&::marker": {
    color: "#E6E0E9",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "#9D4EDD",
  textDecoration: "underline",
}));

export const BoldTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "600",
}));

export const NormalTypography = styled(Typography)(({ theme }) => ({
  color: "#E6E0E9",
}));

export const MainContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  minHeight: "100vh",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: "auto",
  width: "80%",
  marginTop: "70px",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "#141218",
  padding: "60px 150px",
  width: "70%",
  boxShadow: "0px 0px 80px rgba(157, 78, 221, 0.8)",
  borderRadius: "10px",
  textAlign: "center",
  maxWidth: "880px",
  borderRadius: "4px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
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

export const StyledTableRow = styled(TableRow)(
  ({ index = 0, totalLength = 1 }) => ({
    "& .MuiTableCell-root": {
      color: "white",
      borderRight: "1px solid #938F99",
      borderBottom: index === totalLength - 1 ? 0 : "1px solid #938F99",
    },
    "& .MuiTableCell-root:last-child": {
      borderRight: 0,
    },
    "&:hover": {
      backgroundColor: "#222121 !important",
    },
  })
);

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  boxShadow: "0px 0px 80px rgba(157, 78, 221, 0.8)",
  maxHeight: "315px",
  borderRadius: "4px",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#CAC4D0 !important",
  borderColor: "#CAC4D0",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#CAC4D0",
    },
    "&:hover fieldset": {
      borderColor: "#CAC4D0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#CAC4D0",
    },
    "& input": {
      color: "#C4C4D0",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#CAC4D0",
  },
  "& .MuiInputLabel-outlined": {
    "&.Mui-focused": {
      color: "#CAC4D0",
    },
  },
}));

export const useStyles = makeStyles((theme) => ({
  gradientTitle: {
    fontWeight: 600,
    background:
      "linear-gradient(90deg, #9D4EDD, #C987FF, #9D4EDD) 0 0 / 400% 100%",
    color: "transparent",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    animation: "$moveBg 8s linear infinite",
  },
  "@keyframes moveBg": {
    to: {
      backgroundPosition: "400% 0",
    },
  },
  fadingListItem: {
    opacity: 0,
    animation: "$fadeIn 3s forwards",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  fadingOutListItem: {
    opacity: 1,
    animation: "$fadeOut 3s forwards",
  },
  "@keyframes fadeOut": {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
}));
