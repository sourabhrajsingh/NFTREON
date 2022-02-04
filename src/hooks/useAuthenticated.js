import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

export const Authenticated = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    navigate("/");
  }

  return <>{children}</>;
};

export const UnAuthenticated = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return <>{children}</>;
};
