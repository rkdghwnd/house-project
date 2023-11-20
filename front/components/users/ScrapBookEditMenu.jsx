import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeScrapBook } from '../../actions/user';
import { removeExhibitionsScrapBook } from '../../actions/exhibitions';

const ScrapBookEditMenu = ({ editOn, setEditOn }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { scrapBook, exhibitionsScrapBook, me } = useSelector(
    (state) => state.user
  );
  const isMe = me?.id === parseInt(params.userId);
  const totalItemsCount =
    scrapBook?.scrap?.length + exhibitionsScrapBook?.length;

  const checkedItemsCount =
    scrapBook.scrap.filter((item) => item.on).length +
    exhibitionsScrapBook?.filter((item) => item.on)?.length;

  const openEdit = useCallback(() => {
    setEditOn(true);
  }, []);

  const closeEdit = useCallback(() => {
    setEditOn(false);
  }, []);

  const onRemoveScrap = useCallback(() => {
    if (scrapBook.scrap.length !== 0) {
      const checkedItems = scrapBook.scrap
        .filter((item) => item.on)
        .map((item) => {
          return { id: item.id };
        });

      dispatch(
        removeScrapBook({
          userId: me.id,
          checkedItems,
        })
      );
    }
    if (exhibitionsScrapBook.length !== 0) {
      const checkedItems = exhibitionsScrapBook
        .filter((item) => item.on)
        .map((item) => {
          return { id: item.id };
        });
      dispatch(
        removeExhibitionsScrapBook({
          userId: me.id,
          checkedItems,
        })
      );
    }
  }, [me?.id, scrapBook?.scrap, exhibitionsScrapBook]);

  return (
    <div className="scrap-book-edit-menu">
      <div className="scrap-book-edit-menu-left">
        <span>{editOn && `${checkedItemsCount}/${totalItemsCount}`}</span>
      </div>
      <div className="scrap-book-edit-menu-right">
        {editOn ? (
          <>
            <button disabled={!checkedItemsCount} onClick={onRemoveScrap}>
              삭제
            </button>
            <button className="is-active" onClick={closeEdit}>
              취소
            </button>
          </>
        ) : (
          isMe && (
            <button className="blue-button is-active" onClick={openEdit}>
              편집
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ScrapBookEditMenu;
