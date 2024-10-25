import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "components/utils/axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function LoginWithGoogle() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSuccess = async (response) => {
    setLoading(true);
    const { credential } = response;
    await axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/google_login`, {
        id_token: credential,
      })
      .then((response) => {
        if (response.data.user_id && response.data.access_token) {
          localStorage.setItem("userId", response.data.user_id);
          localStorage.setItem("sphereAccessToken", response.data.access_token);
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
        toast.error(error.response?.data.detail || "Something went wrong!", {
          autoClose: 2500,
        });
      });
    setLoading(false);
  };

  const handleFailure = (error) => {
    toast.error(error.response.data.detail || "Something went wrong!", {
      autoClose: 2500,
    });
  };

  return loading ? (
    <CircularProgress
      sx={{
        color: "#9352D6",
        width: "40px !important",
        height: "40px !important",
      }}
    />
  ) : (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleFailure}
      useOneTap
      text="continue_with"
    />
  );
}

export default LoginWithGoogle;
