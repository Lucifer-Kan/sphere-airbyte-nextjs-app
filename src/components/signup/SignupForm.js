import { useState } from "react";
import * as Yup from "yup";
import axios from "src/utils/axios";
import { useFormik, Form, FormikProvider } from "formik";
import { toast } from "react-toastify";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledTextField,
  StyledLoadingButton,
  SignInText,
  FormStack,
} from "components/styles/LoginStyles";

const SignupForm = ({ email, goToSignIn }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const signupUser = async (values) => {
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, {
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
      email: email,
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    validateOnBlur: formSubmitted,
    validateOnChange: formSubmitted,
    onSubmit: async (values) => {
      setFormSubmitted(true);
      await signupUser(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
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
            <StyledTextField
              fullWidth
              label="Confirm Password"
              type="password"
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
              {...getFieldProps("confirmPassword")}
            />
            <StyledLoadingButton
              loading={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
            >
              Create Account
            </StyledLoadingButton>
            <Stack direction="row" spacing={0.5} justifyContent="center">
              <Typography>Already have an account?</Typography>
              <SignInText onClick={goToSignIn}>Log in</SignInText>
            </Stack>
          </FormStack>
        </Form>
      </FormikProvider>
    </>
  );
};

export default SignupForm;
