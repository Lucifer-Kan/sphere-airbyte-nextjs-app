import { Stack } from "@mui/material";
import {
  HeadingText,
  GetStartedButton,
  useStyles,
  MainContainer,
} from "components/styles/PluginStyles";
// import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const classes = useStyles();

  const handleButtonClick = () => {
    router.push(`/ai-plugins/create`);
  };

  return (
    <>
      <Head>
        <title>Sphere AI Plugins</title>
      </Head>
      {/* <Navbar /> */}
      <MainContainer>
        <Stack
          spacing={10}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <HeadingText>Easily </HeadingText>
            <HeadingText className={classes.gradientTitle}>
              generate and maintain AI plugins
            </HeadingText>
            <HeadingText> for your API</HeadingText>
          </span>
          <GetStartedButton onClick={handleButtonClick}>
            Get Started
          </GetStartedButton>
        </Stack>
      </MainContainer>
    </>
  );
};

export default Index;
