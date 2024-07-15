// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Header from './components/Header';
import BodySection from './components/BodySection';
import LivePollPage from './components/livepoll'; // Adjust the import path as per your file structure
import Login from './components/login'; // Import the Login component
import './components/utils.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/live-poll" element={<LivePollPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
