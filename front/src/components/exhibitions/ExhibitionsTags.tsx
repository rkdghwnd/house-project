import React, { forwardRef, LegacyRef, MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import exhibitionsSlice from '../../reducers/exhibitionsSlice';
import { getCategoryExhibitions } from '../../actions/exhibitions';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../reduxToolkitStore';

const ExhibitionsTags = (
  { tags }: { tags: { id: number; title: string }[] },
  ref: LegacyRef<HTMLDivElement>
) => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const onClickTag = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      dispatch(
        exhibitionsSlice.actions.updateCategoryTag({
          tag: e.currentTarget.textContent,
        })
      );
      dispatch(
        getCategoryExhibitions({
          exhibitionsId: params.id || '',
          categoryId: parseInt(e.currentTarget.value),
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
