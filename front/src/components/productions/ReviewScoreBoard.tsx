import React from 'react';
import ScoreStats from './ScoreStats';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../../reducers';

const ReviewScoreBoard = () => {
  const productions = useSelector(
    (state: RootState) => state.productions.productions
  );
  const starCount = Math.round(productions?.review_avg);
  const starIconCount = new Array(5).fill(starCount);

  return (
    <div className="review-scoreboard">
      <div className="score-summary">
        <strong className="average-score">
          {productions?.review_avg?.toFixed(2)}
        </strong>
        <div className="star-rating">
          {starIconCount.map((count) => {
            return (
              <i
                key={shortid.generate()}
                className={`ic-star${count >= 1 && ' is-active'}`}
              ></i>
            );
          })}
        </div>
      </div>

      <div className="score-detail">
        <ScoreStats />
      </div>
    </div>
  );
};

export default ReviewScoreBoard;
