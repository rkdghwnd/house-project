import React from 'react';

const ScoreStats = () => {
  return (
    <dl className="score-stats-list">
      <div className="score-stats-item is-active">
        <dt>5점</dt>
        <dd>
          <div className="bar-graph" aria-hidden>
            <div
              className="active-bar"
              style={{ width: '82.5088339223%' }}
            ></div>
          </div>
          <strong className="count" aria-label="467명">
            467
          </strong>
        </dd>
      </div>

      <div className="score-stats-item">
        <dt>4점</dt>
        <dd>
          <div className="bar-graph" aria-hidden>
            <div
              className="active-bar"
              style={{ width: '15.371024735%' }}
            ></div>
          </div>
          <strong className="count" aria-label="87명">
            87
          </strong>
        </dd>
      </div>

      <div className="score-stats-item">
        <dt>3점</dt>
        <dd>
          <div className="bar-graph" aria-hidden>
            <div className="active-bar" style={{ width: '2.296819788%' }}></div>
          </div>
          <strong className="count" aria-label="13명">
            13
          </strong>
        </dd>
      </div>

      <div className="score-stats-item">
        <dt>2점</dt>
        <dd>
          <div className="bar-graph" aria-hidden>
            <div className="active-bar"></div>
          </div>
          <strong className="count" aria-label="0명">
            0
          </strong>
        </dd>
      </div>

      <div className="score-stats-item">
        <dt>1점</dt>
        <dd>
          <div className="bar-graph" aria-hidden>
            <div className="active-bar"></div>
          </div>
          <strong className="count" aria-label="0명">
            0
          </strong>
        </dd>
      </div>
    </dl>
  );
};

export default ScoreStats;
