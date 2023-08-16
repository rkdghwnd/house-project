import React, { forwardRef } from 'react';
import shortid from 'shortid';

const ExhibitionsTags = ({ tags }, ref) => {
  return (
    <div className="exhibitions-tags" ref={ref}>
      {tags.map((tag) => (
        <button key={shortid.generate()} className="tag">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default forwardRef(ExhibitionsTags);
