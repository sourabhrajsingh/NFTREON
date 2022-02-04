import { Authenticated } from "../../hooks/useAuthenticated";
import Layout from "../../components/Layout";
import DashboardLayout from "./layout";
import styles from "./styles/items.module.scss";
import { useNavigate } from "react-router-dom";

const CreatorItems = () => {
  const navigate = useNavigate();
  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <div className={styles.items}>
            <div className={styles.items__header}>
              <button onClick={() => navigate("/dashboard/items/create-item")}>
                Create an Item
              </button>
            </div>
          </div>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default CreatorItems;
