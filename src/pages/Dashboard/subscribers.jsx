import { Authenticated } from "../../hooks/useAuthenticated";
import Layout from "../../components/Layout";
import DashboardLayout from "./layout";

const Subscribers = () => {
  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <p>Creator Subscribers</p>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default Subscribers;
