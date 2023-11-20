import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { TOP_HEADER_DESKTOP, TOP_HEADER_MOBILE } from '../../hooks/constant';
import { useParams } from 'react-router-dom';
import {
  RefurFloatingInfo,
  fastDeliveryFloatingInfo,
  selfInteriorFlotingInfo,
} from '../../hooks/exhibitions';
import useScript from '../../hooks/useScript';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../reducers/modalSlice';
import {
  addExhibitionsBookmark,
  removeExhibitionsBookmark,
} from '../../actions/exhibitions';

const ExhibitionsLayout = ({ children, productsRef }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { me } = useSelector((state) => state.user);
  const [floatingInfo, setFloatingInfo] = useState({});
  const isBookmarked = me?.ExhibitionBookmarked?.find(
    ({ id }) => id === parseInt(params.id)
  );

  const scrollToTags = useCallback(() => {
    const top =
      productsRef.current.getBoundingClientRect().top -
      TOP_HEADER_DESKTOP -
      100;
    window.scrollBy({ behavior: 'smooth', top });
  }, [productsRef]);

  useEffect(() => {
    if (params.id === '1') {
      setFloatingInfo(RefurFloatingInfo);
    } else if (params.id === '2') {
      setFloatingInfo(fastDeliveryFloatingInfo);
    } else if (params.id === '3') {
      setFloatingInfo(selfInteriorFlotingInfo);
    }
    // 비동기로 북마크 개수 받아오기
  }, [params.id]);

  const onClickShareButton = useCallback(() => {
    dispatch(modalSlice.actions.openShareModal());
  }, []);

  const onClickExhibitionBookmark = useCallback(() => {
    if (me) {
      if (isBookmarked) {
        dispatch(
          removeExhibitionsBookmark({
            exhibitionsId: params.id,
          })
        );
      } else {
        dispatch(
          addExhibitionsBookmark({
            exhibitionsId: params.id,
          })
        );
      }
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me, params.id]);

  return (
    <main className="exhibitions-layout">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-8">
            <div className="exhibitions-layout-editor">{children}</div>
          </div>
          <div className="col-md-4 sm-hidden">
            <div className="exhibitions-layout-floating">
              <p>{floatingInfo.desc}</p>
              <h3>{floatingInfo.title}</h3>
              <div className="exhibitions-layout-floating-selection">
                <button
                  className={`btn-48 btn-${
                    isBookmarked ? 'outlined' : 'secondary'
                  }`}
                  onClick={onClickExhibitionBookmark}
                >
                  <i
                    className={`ic-bookmark${isBookmarked ? '-filled' : ''}`}
                  />
                  <span>북마크</span>
                </button>
                <button
                  className="btn-48 btn-secondary"
                  onClick={onClickShareButton}
                >
                  <AiOutlineShareAlt className="ic-share" />
                  <span>공유하기</span>
                </button>
              </div>
              <button className="btn-48 btn-primary" onClick={scrollToTags}>
                판매상품 목록보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExhibitionsLayout;
