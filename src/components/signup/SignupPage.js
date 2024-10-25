import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import {
  Divider,
  StyledTextField,
  StyledLoadingButton,
  SignInText,
  DividerStack,
  FormStack,
} from "components/styles/LoginStyles";
import LoginWithGoogle from "./LoginWithGoogle";

const SignupPage = ({ setStep, setEmail, goToSignIn }) => {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setEmail(values.email);
      setStep(1);
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
          <FormStack spacing={2.5}>
            <StyledTextField
              fullWidth
              label="Email"
              type="email"
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              {...getFieldProps("email")}
            />
            <StyledLoadingButton
              loading={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
            >
              Continue
            </StyledLoadingButton>
            <Stack direction="row" spacing={0.5} justifyContent="center">
              <Typography sx={{ fontSize: "14px" }}>
                Already have an account?
              </Typography>
              <SignInText onClick={goToSignIn}>Log in</SignInText>
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
    </>
  );
};

export default SignupPage;
