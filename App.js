// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leads from './pages/Leads';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';  // Import NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 errors */}
      </Routes>
    </Router>
  );
}

export default App;
