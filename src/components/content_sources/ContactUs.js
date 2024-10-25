import { Stack } from "@mui/material";
import {
  useStyles,
  ContactusButton,
  ContactUsHeading,
} from "components/styles/ContentSourceStyles";
import { BoldTypography } from "components/styles/PluginStyles";

const ContactUs = () => {
  const classes = useStyles();

  const handleContactUs = () => {
    window.open("https://calendly.com/sphere_nick/30min?month=2023-05");
  };
  return (
    <Stack spacing={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        className={classes.sourcesStack}
        boxShadow={3}
        spacing={{ xs: 3, sm: 3 }}
        sx={{
          background: "linear-gradient(180deg, #FDFAFF 0%, #FBF7FE 100%)",
          boxShadow:
            "0px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.25)",
          padding: "30px !important",
        }}
      >
        <ContactUsHeading sx={{ color: "#000" }}>
          Do you have content you want to monetize?
        </ContactUsHeading>
        <ContactusButton onClick={handleContactUs}>
          Contact us
        </ContactusButton>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
