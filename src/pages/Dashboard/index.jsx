import { Authenticated } from "../../hooks/useAuthenticated";
import Layout from "../../components/Layout";

const Dashboard = () => {
  return (
    <Authenticated>
      <Layout>
        <p>Creator dashboard</p>
      </Layout>
    </Authenticated>
  );
};

export default Dashboard;
