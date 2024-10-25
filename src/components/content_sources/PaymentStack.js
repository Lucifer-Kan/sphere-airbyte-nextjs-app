import { Box, Stack, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { Heading } from "components/styles/ContentSourceStyles";
import React from "react";
import PaymentForm from "./PaymentForm";

function PaymentStack({
  clientSecret,
  stripePromise,
  customerID,
  amount,
  subscriptionID,
  contentSourceID,
}) {
  return (
    <>
      <Heading>Subscription Payment</Heading>
      <Typography>Amount: ${amount}/month</Typography>
      <Stack justifyContent="center" alignItems="center" sx={{ width: "80%" }}>
        <Box width="100% !important">
          <Elements
            key={clientSecret}
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "stripe",
                variables: {
                  colorPrimary: "#475569",
                  colorBackground: "#ffffff",
                  colorText: "#475569",
                  borderRadius: "8px",
                  fontFamily: "Public Sans,sans-serif",
                  fontSizeBase: "1rem",
                  colorTextPlaceholder: "#D3D3D3",
                  spacingTab: "8px",
                  spacingGridRow: "20px",
                },
                rules: {
                  ".Input:focus": {
                    boxShadow: "none",
                    border: "1px solid #475569",
                  },
                },
              },
            }}
          >
            <PaymentForm
              customerID={customerID}
              amount={amount}
              subscriptionID={subscriptionID}
              contentSourceID={contentSourceID}
            />
          </Elements>
        </Box>
      </Stack>
    </>
  );
}

export default PaymentStack;
