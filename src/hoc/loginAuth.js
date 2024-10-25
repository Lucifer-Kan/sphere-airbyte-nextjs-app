import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "../utils/auth";
import { MainContainer } from "components/styles/ContentSourceStyles";
import { CircularProgress } from "@mui/material";

export default function loginAuth(Component) {
  return function UnAuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated()) {
        const queryParams = router.asPath.split("?")[1];
        queryParams
          ? router.replace(`/content_sources?${queryParams}`)
          : router.replace("/content_sources");
      }
    }, []);

    return <Component {...props} />;
  };
}
