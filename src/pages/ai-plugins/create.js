import { useState } from "react";
import * as Yup from "yup";
import axios from "src/utils/axios";
import { useFormik, Form, FormikProvider } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import {
  BoldTypography,
  StyledStack,
  StyledLoadingButton,
  StyledTextField,
  MainContainer,
} from "../../styles/PluginStyles";
// import Navbar from "../../components/Navbar";
import Head from "next/head";

const Create = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const PluginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    documentationStartUrl: Yup.string().required(
      "Documentation Start URL is required"
    ),
    documentationBaseUrl: Yup.string().required(
      "Documentation Base URL is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      documentationStartUrl: "",
      documentationBaseUrl: "",
    },
    validationSchema: PluginSchema,
    validateOnBlur: formSubmitted,
    validateOnChange: formSubmitted,
    onSubmit: async (values) => {
      setFormSubmitted(true);
      await axios
        .post("/ai-plugins/create", {
          name: values.name,
          documentation_start_url: values.documentationStartUrl,
          documentation_base_url: values.documentationBaseUrl,
        })
        .then((response) => {
          const pluginUpdatedName = values.name;
          router.push(`/ai-plugins/${pluginUpdatedName}`);
        })
        .catch((error) => {
          toast.error(error.response.data.detail || "Something went wrong!", {
            autoClose: 2500,
          });
        });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <Head>
        <title>Create AI Plugin</title>
      </Head>
      {/* <Navbar /> */}
      <ToastContainer />
      <MainContainer>
        <StyledStack spacing={5}>
          <BoldTypography>
            We create your ChatGPT Plugin by reading your documentation
          </BoldTypography>
          <FormikProvider value={formik}>
            <Form
              autoComplete="off"
              style={{ width: "100%", maxWidth: "410px" }}
              onSubmit={handleSubmit}
            >
              <Stack spacing={3}>
                <StyledTextField
                  fullWidth
                  label="Name"
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  {...getFieldProps("name")}
                />
                <StyledTextField
                  fullWidth
                  label="Documentation Start URL"
                  error={Boolean(
                    touched.documentationStartUrl &&
                      errors.documentationStartUrl
                  )}
                  helperText={
                    touched.documentationStartUrl &&
                    errors.documentationStartUrl
                  }
                  {...getFieldProps("documentationStartUrl")}
                />
                <StyledTextField
                  fullWidth
                  label="Documentation Base URL"
                  error={Boolean(
                    touched.documentationBaseUrl && errors.documentationBaseUrl
                  )}
                  helperText={
                    touched.documentationBaseUrl && errors.documentationBaseUrl
                  }
                  {...getFieldProps("documentationBaseUrl")}
                />
                <StyledLoadingButton
                  loading={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Start Generating Plugin
                </StyledLoadingButton>
              </Stack>
            </Form>
          </FormikProvider>
        </StyledStack>
      </MainContainer>
    </>
  );
};

export default Create;
