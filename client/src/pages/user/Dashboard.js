import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../../Dashboard.css"

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="dashboard-container">
        <div className="user-menu">
          <UserMenu />
        </div>
        <div className="user-details">
          <div className="card">
            <h1>Welcome, {auth?.user?.name}</h1>
            <p>Email: {auth?.user?.email}</p>
            {/* <p>Address: {auth?.user?.address}</p> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
