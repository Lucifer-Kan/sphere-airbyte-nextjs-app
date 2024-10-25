import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { Heading, useStyles } from "components/styles/ContentSourceStyles";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";

function ProductDetails({ product, handleProceedPayment }) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handlePaymentProceed = async () => {
    setLoading(true);
    await handleProceedPayment();
  };

  return (
    <>
      <Heading>Product Subscription Details</Heading>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "20px",
          borderRadius: "5px",
          border: "1px solid #fff",
        }}
        spacing={2}
      >
        <Typography>{product.name}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>${product.amount}/month</Typography>
        {loading ? (
          <CircularProgress
            sx={{
              color: "#fff",
              width: "16px !important",
              height: "16px !important",
            }}
          />
        ) : (
          <Button
            onClick={handlePaymentProceed}
            loading={loading}
            className={classes.paymentProceedButton}
          >
            Proceed to Payment
          </Button>
        )}
      </Stack>
    </>
  );
}

export default ProductDetails;
