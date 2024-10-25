import { StyledWhiteNavbar, NavbarButton } from "../styles/NavbarStyles";

export default function WhiteNavbar({
  redirectUri,
  isSubmitting,
  handleRedirect,
}) {
  return (
    <StyledWhiteNavbar>
      <img
        height="42.5px"
        width="140px"
        src="https://sphere-public.s3.eu-west-2.amazonaws.com/sphere_blue.svg"
      />
      {redirectUri !== "null" && redirectUri !== "" && (
        <NavbarButton
          loading={isSubmitting}
          size="large"
          variant="contained"
          onClick={handleRedirect}
        >
          Continue to ChatGPT &#8594;
        </NavbarButton>
      )}
    </StyledWhiteNavbar>
  );
}
