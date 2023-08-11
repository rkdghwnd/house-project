import React from 'react';
import shortid from 'shortid';

const ExhibitionsTags = ({ tags }) => {
  return (
    <div className="exhibitions-tags">
      {tags.map((tag) => (
        <button key={shortid.generate()} className="tag">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ExhibitionsTags;
