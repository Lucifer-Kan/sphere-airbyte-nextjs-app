import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "../utils/auth";
import { MainContainer } from "components/styles/ContentSourceStyles";
import { CircularProgress } from "@mui/material";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!isAuthenticated()) {
        const queryParams = router.asPath.split("?")[1];
        queryParams
          ? router.replace(`/login?${queryParams}`)
          : router.replace("/login");
      } else {
        setIsLoading(false);
      }
    }, []);

    if (isLoading) {
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

    return <Component {...props} />;
  };
}
