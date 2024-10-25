import Head from "next/head";
import { MainContainer, StyledStack } from "components/styles/PluginStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "components/styles/ContentSourceStyles";
import withAuth from "components/hoc/withAuth";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import axios from "components/utils/axios";
import ProductDetails from "components/components/content_sources/ProductDetails";
import PaymentStack from "components/components/content_sources/PaymentStack";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

const Subscription = () => {
  const classes = useStyles();
  const [customerID, setCustomerID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [subscriptionID, setSubscriptionID] = useState("");
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY || ""
  );
  const [product, setProduct] = useState({});
  const router = useRouter();
  const [contentSourceID, setContentSourceID] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const contentSourceID = router.query.content_source_id;
      setContentSourceID(router.query.content_source_id);
      if (!clientSecret && !customerID) {
        axios
          .get(`/stripe_product_details?content_source_id=${contentSourceID}`)
          .then((response) => {
            setProduct(response.data.product);
          });
      }
    }
  }, [router.isReady]);

  const handleProceedPayment = () => {
    axios
      .get(`/subscription_intent?price_id=${product.price_id}`)
      .then((response) => {
        setClientSecret(response.data.client_secret);
        setCustomerID(response.data.customer_id);
        setSubscriptionID(response.data.subscription_id);
      });
  };

  if (!product.name) {
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
      <Head>
        <title>Sphere | Subscription</title>
      </Head>
      <ToastContainer />
      <MainContainer>
        <StyledStack spacing={5}>
          {clientSecret && customerID ? (
            <PaymentStack
              clientSecret={clientSecret}
              stripePromise={stripePromise}
              customerID={customerID}
              amount={product.amount}
              subscriptionID={subscriptionID}
              contentSourceID={contentSourceID}
            />
          ) : (
            <ProductDetails
              product={product}
              handleProceedPayment={handleProceedPayment}
            />
          )}
        </StyledStack>
      </MainContainer>
    </>
  );
};

export default withAuth(Subscription);
