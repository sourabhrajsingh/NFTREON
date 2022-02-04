import Sidebar from "components/Sidebar";
import styles from "./layout.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__side}>
        <Sidebar />
      </div>

      <div className={styles.layout__children}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
