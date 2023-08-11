import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      <ol className="page-list">
        <li className="page-item is-active">
          <a href="/">1</a>
        </li>
        <li className="page-item">
          <a href="/">2</a>
        </li>
        <li className="page-item">
          <a href="/">3</a>
        </li>
        <li className="page-item">
          <a href="/">4</a>
        </li>
        <li className="page-item">
          <a href="/">5</a>
        </li>
      </ol>
      <button className="page-control page-next" type="button">
        <i className="ic-chevron"></i>
      </button>
    </div>
  );
};

export default Pagination;
