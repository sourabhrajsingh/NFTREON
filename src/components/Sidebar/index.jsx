import Icon from "components/Icon";
import styles from "./sidebar.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import cx from "classnames";
import { useMoralis } from "react-moralis";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const page = location.pathname.split("/")[2];

  const { logout } = useMoralis();

  return (
    <aside className={styles.sidebar}>
      <div
        className={cx(
          styles.sidebar__item,
          !page && styles.sidebar__item__active
        )}
        onClick={() => navigate("/dashboard")}
      >
        <Icon id={!page ? "ProfileActiveIcon" : "ProfileIcon"} />
        <p>Profile</p>
      </div>
      <div
        className={cx(
          styles.sidebar__item,
          page === "items" && styles.sidebar__item__active
        )}
        onClick={() => navigate("/dashboard/items")}
      >
        <Icon id={page === "items" ? "ItemsActiveIcon" : "ItemsIcon"} />
        <p>Items</p>
      </div>
      <div
        className={cx(
          styles.sidebar__item,
          page === "subscribers" && styles.sidebar__item__active
        )}
        onClick={() => navigate("/dashboard/subscribers")}
      >
        <Icon
          id={
            page === "subscribers" ? "SubscribersActiveIcon" : "SubscribersIcon"
          }
        />
        <p>Subscribers</p>
      </div>
      <div className={cx(styles.sidebar__item)} onClick={logout}>
        <Icon id="ProfileIcon" />
        <p>Logout</p>
      </div>
    </aside>
  );
};

export default Sidebar;
