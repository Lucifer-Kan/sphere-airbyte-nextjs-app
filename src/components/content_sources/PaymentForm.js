import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "components/utils/axios";

function PaymentForm({ customerID, amount, subscriptionID, contentSourceID }) {
  const stripe = useStripe();
  const elements = useElements();
  const [valid, setValid] = useState(true);
  const router = useRouter();

  const handleBackButton = () => {
    router.replace("/content_sources");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      if (amount === 0) {
        toast.error("Amount can't be zero!");
        return;
      }
      setSubmitting(true);
      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "",
          payment_method_data: {
            billing_details: {
              name: values?.name,
            },
          },
        },
        redirect: "if_required",
      });
      if (
        result?.paymentIntent &&
        result?.paymentIntent.status === "succeeded"
      ) {
        await axios
          .post(`/subscribe_content_source`, {
            stripe_customer_id: customerID,
            stripe_payment_method_id: String(
              result.paymentIntent?.payment_method
            ),
            subscription_id: subscriptionID,
            content_source_id: contentSourceID,
          })
          .then((res) => {
            toast.success("subscribed to content source successfully!");
            router.replace("/content_sources");
          })
          .catch((err) => {
            toast.error(`${err.message || "Something went wrong!"}`);
          });
      } else if (result.error) {
        toast.error(`${result.error.message || "Something went wrong!"}`);
        setSubmitting(false);
      } else {
        toast.error("Something went wrong!");
        setSubmitting(false);
      }
    },
  });

  const { isValid, isSubmitting, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <PaymentElement
        onChange={(e) => {
          setValid(e.complete);
        }}
        options={{ terms: { card: "never" } }}
      />
      <Stack spacing={{ xs: 3, md: 2 }} sx={{ marginTop: "32px" }}>
        <LoadingButton
          fullWidth
          onClick={() => handleSubmit()}
          variant="contained"
          size="large"
          loading={isSubmitting}
          disabled={!(valid && isValid)}
          sx={{
            backgroundColor: "#fff !important",
            color: "#000",
            cursor: "pointer",
          }}
        >
          Get Started
        </LoadingButton>
        <Button fullWidth variant="outlined" onClick={handleBackButton}>
          Back
        </Button>
      </Stack>
    </FormikProvider>
  );
}

export default PaymentForm;
