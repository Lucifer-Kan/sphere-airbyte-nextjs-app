import PageHead from "components/components/PageHead";
import { StyledLoadingButton } from "components/styles/PluginStyles";
import SourcesStack from "components/components/content_sources/SourcesStack";
import ContactUs from "components/components/content_sources/ContactUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MainContainer,
  useStyles,
} from "components/styles/ContentSourceStyles";
import withAuth from "components/hoc/withAuth";
import { CircularProgress, Stack } from "@mui/material";
import axios from "components/utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import WhiteNavbar from "components/components/WhiteNavbar";

const Index = () => {
  const classes = useStyles();
  const [sources, setSources] = useState([]);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userId = localStorage.getItem("userId");
  const [redirectUri, setRedirectUri] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedRedirectUri = params.get("url");
    const decodedRedirectUri = decodeURIComponent(encodedRedirectUri);
    setRedirectUri(decodedRedirectUri);
    if (!sources || sources?.length === 0) {
      axios
        .get(`/user_content_sources`)
        .then((response) => {
          setSources(response?.data);
        })
        .catch((error) => {
          toast.success("something went wrong!", {
            autoClose: 2000,
          });
        });
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (router.query.success === "true") {
        toast.success("Success!", {
          autoClose: 2000,
        });
        router.replace(router.pathname);
      } else if (router.query.canceled === "true") {
        toast.error("There was an error processing your payment", {
          autoClose: 2000,
        });
        router.replace(router.pathname);
      }
    }
  }, [router.isReady]);

  const handleRedirect = () => {
    setIsSubmitting(true);
    if (redirectUri !== "null" && redirectUri !== "") {
      localStorage.removeItem("sphereAccessToken");
      localStorage.removeItem("userId");
      window.location.href = `${redirectUri}?code=${userId}`;
    }
  };

  if (!sources || sources?.length === 0) {
    return (
      <MainContainer>
        <CircularProgress
          sx={{
            color: "#9352D6",
            width: "56px !important",
            height: "56px !important",
          }}
        />
      </MainContainer>
    );
  }

  return (
    <>
      <PageHead
        title="Sphere | Content Sources"
        description="View and manage your Sphere content sources"
      />
      <ToastContainer />
      <WhiteNavbar
        redirectUri={redirectUri}
        isSubmitting={isSubmitting}
        handleRedirect={handleRedirect}
      />
      <MainContainer sx={{ justifyContent: "flex-start" }}>
        <Stack
          spacing={10}
          sx={{
            justifyContent: "space-between",
            maxWidth: "590px",
            width: "-webkit-fill-available",
          }}
        >
          <SourcesStack
            heading="Your Content Sources"
            sources={sources?.user_content_sources}
            subscriptionStatus="Unsubscribe"
            setSources={setSources}
          />
          <ContactUs />
          <SourcesStack
            heading="Other Content Sources"
            sources={sources?.remaining_content_sources}
            subscriptionStatus="Subscribe"
            setSources={setSources}
          />
        </Stack>
      </MainContainer>
    </>
  );
};

export default withAuth(Index);
