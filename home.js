// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Link component for internal navigation
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const Home = () => {
  return (
    <>
      {/* Helmet is used to dynamically change the page's meta info for SEO */}
      <Helmet>
        <title>Pay-Per-Lead Platform | Home</title>
        <meta name="description" content="Get quality leads for your business with our Pay-Per-Lead system." />
      </Helmet>
      
      {/* Main container for the Home page */}
      <div className="home-container">
        <h1>Welcome to the Pay-Per-Lead Platform</h1>
        <p>Get quality leads to grow your business.</p>
        
        {/* Link to the Leads page */}
        <Link to="/leads">
          <button>Get Leads</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
