import React, { useState } from 'react';
import Poll from './poll';
import './livepoll.css';

const LivePoll = () => {
  const [yayCount, setYayCount] = useState(0);
  const [nayCount, setNayCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleYayClick = () => {
    setYayCount(yayCount + 1);
    // Add animation class or effect when yay is clicked
  };

  const handleNayClick = () => {
    setNayCount(nayCount + 1);
    // Add animation class or effect when nay is clicked
  };

  const showResultsHandler = () => {
    setShowResults(true);
    // Logic to show results from last week's poll
  };

  return (
    <div className="live-poll-container">
      <div className="intro-text">
        <h2>Which fashion trend do you love the most?</h2>
        <p>Vote now and see what others think!</p>
      </div>
      <Poll handleYayClick={handleYayClick} handleNayClick={handleNayClick} />
      <div className="result-container">
        {showResults && (
          <>
            <h3>Last Week's Most Selected Choices:</h3>
            <ul>
              <li>Yay: {yayCount}</li>
              <li>Nay: {nayCount}</li>
              {/* Add more items as needed */}
            </ul>
          </>
        )}
        <button className="show-results-button" onClick={showResultsHandler}>
          Show Last Week's Results
        </button>
      </div>
    </div>
  );
};

export default LivePoll;
