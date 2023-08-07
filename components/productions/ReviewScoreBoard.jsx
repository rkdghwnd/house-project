import React from 'react';
import ScoreStats from './ScoreStats';

const ReviewScoreBoard = () => {
  return (
    <div className="review-scoreboard">
      <div className="score-summary">
        <strong className="average-score" aria-label="평점 4.8">
          4.8
        </strong>
        <div className="star-rating">
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
        </div>
      </div>

      <div className="score-detail">
        <ScoreStats />
      </div>
    </div>
  );
};

export default ReviewScoreBoard;
