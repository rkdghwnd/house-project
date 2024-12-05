import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { getReviewScoreStats } from '../../actions/productions';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const ScoreStats = () => {
  const dispatch = useAppDispatch();

  const productions = useSelector(
    (state: RootState) => state.productions.productions
  );
  const reviewScoreStats = useSelector(
    (state: RootState) => state.productions.reviewScoreStats
  );

  useEffect(() => {
    if (productions.id) {
      dispatch(
        getReviewScoreStats({
          id: productions.id,
        })
      );
    }
  }, [productions.id]);

  return (
    <dl className="score-stats-list">
      {reviewScoreStats?.starCountArray?.map((starCount, index) => {
        return (
          <div
            key={shortid.generate()}
            className={`score-stats-item ${
              reviewScoreStats?.mostCountedStar === index && 'is-active'
            }`}
          >
            <dt>{5 - index}점</dt>
            <dd>
              <div className="bar-graph" aria-hidden>
                <div
                  className="active-bar"
                  style={{
                    width: `${
                      (starCount / reviewScoreStats.totalCount) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <strong className="count">{starCount}</strong>
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export default ScoreStats;
