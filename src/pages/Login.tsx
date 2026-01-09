import { Navigate } from "react-router-dom";

export default function Login() {
  // Redirect to home - login is handled via Microsoft SSO in header
  return <Navigate to="/" replace />;
}
