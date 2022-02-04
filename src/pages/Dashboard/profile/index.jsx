import { Authenticated } from "../../../hooks/useAuthenticated";
import Layout from "../../../components/Layout";
import DashboardLayout from "../layout";
import styles from "../styles/profile.module.scss";
import { useState, useEffect } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import UpdateProfile from "./updateProfile";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Authenticated>
      <Layout>
        <DashboardLayout>
          <section className={styles.profile}>
            <Tabs>
              <TabList>
                <Tab>Dashboard</Tab>
                <Tab>Update Profile</Tab>
                <Tab>Tiers</Tab>
                <Tab>Preview</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <UpdateProfile />
              </TabPanel>
            </Tabs>
          </section>
        </DashboardLayout>
      </Layout>
    </Authenticated>
  );
};

export default Dashboard;
