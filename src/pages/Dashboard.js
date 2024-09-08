// src/pages/Dashboard.js

import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Pay-Per-Lead Platform</title>
        <meta name="description" content="View your purchased leads and account details." />
      </Helmet>
      
      <div className="dashboard-container">
        <h1>Your Dashboard</h1>
        <p>Here you can see the leads you have purchased and your account details.</p>
      </div>
    </>
  );
};

export default Dashboard;
