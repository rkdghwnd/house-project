import React, { forwardRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import exhibitionsSlice from '../../reducers/exhibitionsSlice';
import { getCategoryExhibitions } from '../../actions/exhibitions';
import { useParams } from 'react-router-dom';

const ExhibitionsTags = ({ tags }, ref) => {
  const params = useParams();
  const dispatch = useDispatch();

  const onClickTag = useCallback(
    (e) => {
      dispatch(
        exhibitionsSlice.actions.updateCategoryTag({
          tag: e.currentTarget.textContent,
        })
      );
      dispatch(
        getCategoryExhibitions({
          exhibitionsId: params.id,
          categoryId: e.currentTarget.value,
        })
      );
    },
    [params]
  );

  return (
    <div className="exhibitions-tags" ref={ref}>
      {tags.map((tag) => (
        <button
          key={shortid.generate()}
          className="tag"
          onClick={onClickTag}
          value={tag.id}
        >
          {tag.title}
        </button>
      ))}
    </div>
  );
};

export default forwardRef(ExhibitionsTags);
