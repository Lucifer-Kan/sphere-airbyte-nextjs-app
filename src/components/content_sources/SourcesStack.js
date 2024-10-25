import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { StackHeading, useStyles } from "components/styles/ContentSourceStyles";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "components/utils/axios";
import { loadStripe } from "@stripe/stripe-js";
import Modal from "@mui/material";
import CenteredModal from "./CenterModal";

function SourcesStack({ heading, sources, subscriptionStatus, setSources }) {
  const classes = useStyles();
  const [activeSource, setActiveSource] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleSubscribeContentSource = async (source) => {
    setActiveSource(source[0]);
    if (subscriptionStatus === "Subscribe") {
      if (source[3]) await subscribeContentSource(source);
      else await subscribeFreeContentSource(source);
    } else {
      handleOpen();
    }
    setActiveSource("");
  };

  const subscribeContentSource = async (source) => {
    try {
      const response = await axios.post(`/create_checkout_session`, {
        price_id: source[3],
        content_source_id: source[0],
      });
      const session_id = response?.data?.session_id;
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || ""
      );
      const result = await stripe.redirectToCheckout({
        sessionId: session_id,
      });
      if (result.error) {
        toast.error("There was an error processing your request", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("There was an error processing your request", {
        autoClose: 2000,
      });
    }
  };

  const subscribeFreeContentSource = async (source) => {
    try {
      const response = await axios.post(`/subscribe_content_source`, {
        content_source_id: source[0],
      });
      toast.success("Success!", {
        autoClose: 2000,
      });
      setSources(response?.data);
    } catch (error) {
      toast.error("There was an error processing your request", {
        autoClose: 2000,
      });
    }
  };

  const unsubscribeContentSource = async (source) => {
    try {
      console.log("unsubscribe");
      const response = await axios.delete(`/unsubscribe_content_source`, {
        data: {
          content_source_id: source,
        },
      });
      toast.success("Success!", {
        autoClose: 2000,
      });
      setSources(response?.data);
    } catch (error) {
      toast.error("There was an error processing your request", {
        autoClose: 2000,
      });
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <StackHeading>{heading}</StackHeading>
      <Stack spacing={3}>
        {sources?.map((source) => (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            className={classes.sourcesStack}
            key={source[0]}
            boxShadow={1}
            spacing={{ xs: 3, sm: 3 }}
          >
            <Stack
              alignItems={{ md: "flex-start", sm: "center", xs: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "unset !important",
                }}
              >
                {source[1]}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "unset !important",
                }}
              >
                {source[3] ? `$${source[2]}/month` : "Free"}
              </Typography>
            </Stack>
            {activeSource === source[0] ? (
              <CircularProgress
                sx={{
                  color: "#000",
                  width: "24px !important",
                  height: "24px !important",
                }}
              />
            ) : (
              <Button
                className={`${classes.subscriptionButton} ${
                  subscriptionStatus !== "Subscribe"
                    ? classes.unsubscribeButton
                    : classes.subscribeButton
                }`}
                onClick={
                  activeSource === ""
                    ? () => toggleSubscribeContentSource(source)
                    : null
                }
              >
                {subscriptionStatus}
              </Button>
            )}
            <CenteredModal
              open={open}
              onClose={handleClose}
              unsubscribeContentSource={unsubscribeContentSource}
              sourceName={source[1]}
              sourceId={source[0]}
            ></CenteredModal>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default SourcesStack;
