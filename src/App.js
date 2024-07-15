// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BodySection from './components/BodySection';
import LivePollPage from './components/livepoll'; // Adjust the import path as per your file structure
import Login from './components/login'; // Import the Login component
import Studio from './components/Studio'; // Import the Studio component
import './components/utils.css'; // Import your CSS file for styling
import { auth } from '/Users/anamikakumari/myntra-app/src/firebase.js'; // Ensure correct import
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/live-poll" element={<LivePollPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Studio" element={<Studio />} /> {/* Add route for Studio component */}
        </Routes>
        {!user ? <Welcome /> : <ChatBox />} {/* Conditionally render Welcome or ChatBox based on user authentication */}
      </div>
    </Router>
  );
}

export default App;
