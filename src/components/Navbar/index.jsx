import styles from "./navbar.module.scss";
import { useMoralis } from "react-moralis";
import Icon from "../Icon";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo} onClick={() => navigate("/")}>
        <Icon id="Logo" />
        <p>NFTreon</p>
      </div>
      <div className={styles.navbar__right}>
        {!isAuthenticated ? (
          <button onClick={() => authenticate()}>Create on NFTreon</button>
        ) : (
          <div className={styles.navbar__right__avatar}>
            <Icon id="Avatar" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
