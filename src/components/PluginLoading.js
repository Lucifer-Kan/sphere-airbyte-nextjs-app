import { useState, useEffect } from "react";
import { Stack, Typography, CircularProgress } from "@mui/material";
import {
  useStyles,
  StyledListItem,
  LoadingStack,
  LoadingPurpleStack,
} from "../styles/PluginStyles";

export default function PluginLoading() {
  const classes = useStyles();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep >= 4) {
          return 1;
        } else {
          return prevStep + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function getListItemClassName() {
    if (step >= 4) {
      return `${classes.fadingOutListItem} fadeOut`;
    } else {
      return `${classes.fadingListItem} fadeIn`;
    }
  }

  return (
    <LoadingStack spacing={10}>
      <Stack direction="row" spacing={1}>
        <CircularProgress
          sx={{
            color: "#9352D6",
            width: "22px !important",
            height: "22px !important",
          }}
        />
        <Typography sx={{ color: "#fff" }}>
          Your plugin is being built
        </Typography>
      </Stack>
      <LoadingPurpleStack>
        <ol style={{ listStyleType: "decimal", alignSelf: "center" }}>
          {step >= 1 && (
            <StyledListItem className={getListItemClassName()}>
              Reading documentation...
            </StyledListItem>
          )}
          {step >= 2 && (
            <StyledListItem className={getListItemClassName()}>
              Finding API endpoints...
            </StyledListItem>
          )}
          {step >= 3 && (
            <StyledListItem className={getListItemClassName()}>
              Generate plugin files...
            </StyledListItem>
          )}
        </ol>
      </LoadingPurpleStack>
    </LoadingStack>
  );
}
