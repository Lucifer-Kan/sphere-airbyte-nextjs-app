import { Stack } from "@mui/material";
import {
  useStyles,
  MainContainer,
  StyledImage,
} from "components/styles/PluginStyles";
import Head from "next/head";
import { useRouter } from "next/router";

const Index = () => {
  return (
    <>
      <Head>
        <title>Sphere AI Plugins</title>
      </Head>
      <MainContainer justifyContent="center" sx={{ marginTop: "0" }}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledImage src="/YearlySales.svg" alt="First SVG Image" />
          <StyledImage src="/Task.svg" alt="Second SVG Image" />
        </Stack>
      </MainContainer>
    </>
  );
};

export default Index;
