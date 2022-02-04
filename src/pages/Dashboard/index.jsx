import { Authenticated } from "../../hooks/useAuthenticated";
import Layout from "../../components/Layout";
import DashboardLayout from "./layout";

const Dashboard = () => {
  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <p>Creator dashboard</p>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default Dashboard;
