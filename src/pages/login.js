import { useState } from "react";
import * as Yup from "yup";
import axios from "src/utils/axios";
import { useFormik, Form, FormikProvider } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { Stack, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import PageHead from "components/components/PageHead";
import {
  MainContainer,
  StyledStack,
  StyledTextField,
  StyledLoadingButton,
  SignInText,
  LogoImage,
  FormStack,
  DividerStack,
  Divider,
} from "components/styles/LoginStyles";
import loginAuth from "components/hoc/loginAuth";
import LoginWithGoogle from "components/components/signup/LoginWithGoogle";

const Login = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password required"),
  });

  const goToSignUp = () => {
    router.replace({
      pathname: "/signup",
      query: router.query,
    });
  };

  const loginUser = async (values) => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          if (response.data.user_id && response.data.access_token) {
            localStorage.setItem("userId", response.data.user_id);
            localStorage.setItem(
              "sphereAccessToken",
              response.data.access_token
            );
            toast.success("Logged in successfully!", {
              autoClose: 2000,
            });
            router.replace({
              pathname: "/content_sources",
              query: router.query,
            });
          }
        })
        .catch((error) => {
          setFormSubmitted(false);
          toast.error(error.response.data.detail || "Something went wrong!", {
            autoClose: 2000,
          });
        });
    } catch (error) {
      toast.error("Something went wrong!", {
        autoClose: 2000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    validateOnBlur: formSubmitted,
    validateOnChange: formSubmitted,
    onSubmit: async (values) => {
      setFormSubmitted(true);
      await loginUser(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <PageHead
        title="Sphere | Log In"
        description="Log in to Sphere to manage your content sources"
      />
      <ToastContainer />
      <MainContainer>
        <StyledStack spacing={5}>
          <LogoImage src="https://sphere-public.s3.eu-west-2.amazonaws.com/sphere_blue.svg" />
          <FormikProvider value={formik}>
            <Form
              autoComplete="off"
              style={{ width: "100%" }}
              onSubmit={handleSubmit}
            >
              <FormStack spacing={3}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  type="email"
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  {...getFieldProps("email")}
                />
                <StyledTextField
                  fullWidth
                  label="Password"
                  type="password"
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  {...getFieldProps("password")}
                />
                <StyledLoadingButton
                  loading={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Log in
                </StyledLoadingButton>
                <Stack direction="row" spacing={0.5} justifyContent="center">
                  <Typography sx={{ fontSize: "14px" }}>
                    Don't have an account?
                  </Typography>
                  <SignInText onClick={goToSignUp}>Sign up</SignInText>
                </Stack>
              </FormStack>
            </Form>
          </FormikProvider>
          <DividerStack direction="row" spacing={2.5}>
            <Divider />
            <Typography sx={{ color: "rgba(0, 0, 0, 0.54)", fontWeight: 500 }}>
              or
            </Typography>
            <Divider />
          </DividerStack>
          <LoginWithGoogle />
        </StyledStack>
      </MainContainer>
    </>
  );
};

export default loginAuth(Login);
