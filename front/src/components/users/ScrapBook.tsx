import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getScrapBook } from '../../actions/user';
import modalSlice from '../../reducers/modalSlice';
import { getExhibitionsScrapBook } from '../../actions/exhibitions';
import ScrapBookEditMenu from './ScrapBookEditMenu';
import ScrapBookList from './ScrapBookList';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const ScrapBook = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const scrapBook = useSelector((state: RootState) => state.user.scrapBook);
  const me = useSelector((state: RootState) => state.user.me);

  const [editOn, setEditOn] = useState(false);
  const onClickShareButton = useCallback(() => {
    dispatch(modalSlice.actions.openShareModal({}));
  }, []);

  useEffect(() => {
    dispatch(getScrapBook({ userId: parseInt(params.userId || '') }));
    dispatch(
      getExhibitionsScrapBook({ userId: parseInt(params.userId || '') })
    );
  }, [params.userId]);

  useEffect(() => {
    if (!me) {
      setEditOn(false);
    }
  }, [me]);

  return (
    <section className="scrap-book">
      <div className="scrap-book-header">
        <h2>스크랩북</h2>
        <button className="btn-40 btn-outlined" onClick={onClickShareButton}>
          <AiOutlineShareAlt className="share-icon" />
          <span>공유하기</span>
        </button>
      </div>
      <div className="profile-image">
        <img
          src={`${
            import.meta.env.VITE_BACK_END_DOMAIN
          }/${scrapBook?.profile_image}`}
          alt="프로필 이미지"
        />
        <h3>{scrapBook.name}</h3>
      </div>
      <ScrapBookEditMenu editOn={editOn} setEditOn={setEditOn} />
      <ScrapBookList editOn={editOn} />
    </section>
  );
};

export default ScrapBook;
