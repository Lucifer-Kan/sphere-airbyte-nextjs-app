export function isAuthenticated() {
  const token = localStorage.getItem("sphereAccessToken");
  return token ? true : false;
}
