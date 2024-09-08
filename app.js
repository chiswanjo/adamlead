// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Router for navigation
import Home from './pages/Home'; // Import Home component
import Leads from './pages/Leads'; // Import Leads component
import Dashboard from './pages/Dashboard'; // Import Dashboard component

function App() {
  return (
    <Router>
      {/* The Routes component handles all the page routing */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root path for Home */}
        <Route path="/leads" element={<Leads />} /> {/* Leads page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard for user */}
      </Routes>
    </Router>
  );
}

export default App;
