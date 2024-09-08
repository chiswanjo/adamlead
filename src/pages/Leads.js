// src/pages/Leads.js

import React from 'react';
import { Helmet } from 'react-helmet';

const Leads = () => {
  return (
    <>
      <Helmet>
        <title>Leads | Adamlead</title>
        <meta name="description" content="Browse and purchase high-quality leads to grow your business." />
      </Helmet>
      
      <div className="leads-container">
        <h1>Available Leads</h1>
        {/* Lead listing will go here */}
        <p>Here you can browse the available leads.</p>
      </div>
    </>
  );
};

export default Leads;
