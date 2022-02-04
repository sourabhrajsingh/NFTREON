import { Authenticated } from "../../hooks/useAuthenticated";
import Layout from "../../components/Layout";
import DashboardLayout from "./layout";

const CreatorItems = () => {
  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <p>Creator Items</p>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default CreatorItems;
