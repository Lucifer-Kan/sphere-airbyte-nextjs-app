import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHead from "components/components/PageHead";
import {
  LogoImage,
  MainContainer,
  StyledStack,
} from "components/styles/LoginStyles";
import SignupPage from "components/components/signup/SignupPage";
import SignupForm from "components/components/signup/SignupForm";
import { Typography } from "@mui/material";
import loginAuth from "components/hoc/loginAuth";
import { useRouter } from "next/router";

const Signup = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const goToSignIn = () => {
    router.replace({
      pathname: "/login",
      query: router.query,
    });
  };

  return (
    <>
      <PageHead
        title="Sphere | Sign Up"
        description="Create a Sphere account to manage your content sources"
      />
      <ToastContainer />
      <MainContainer>
        <StyledStack spacing={5}>
          <LogoImage src="https://sphere-public.s3.eu-west-2.amazonaws.com/sphere_blue.svg" />
          <Typography
            sx={{ color: "#212B36", fontSize: "20px", fontWeight: 600 }}
          >
            Create an account
          </Typography>
          {step === 0 ? (
            <SignupPage
              setStep={setStep}
              setEmail={setEmail}
              goToSignIn={goToSignIn}
            />
          ) : (
            <SignupForm
              setStep={setStep}
              email={email}
              goToSignIn={goToSignIn}
            />
          )}
        </StyledStack>
      </MainContainer>
    </>
  );
};

export default loginAuth(Signup);
