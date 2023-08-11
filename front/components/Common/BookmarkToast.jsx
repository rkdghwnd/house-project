import React from 'react';

const BookmarkToast = () => {
  return (
    //  {/* <!-- NOTE: 북마크에 추가했을 때 --> */}
    <aside className="bookmark-toast">
      <h1 className="bookmark-title">스크랩했습니다</h1>

      <button className="close-button" type="button" aria-label="닫기">
        <i className="ic-close" aria-hidden></i>
      </button>

      <div className="button-group">
        <a className="btn-32 btn-outlined" href="/">
          스크랩북 보기
        </a>
        <button className="btn-32 btn-primary" type="button">
          폴더에 담기
        </button>
      </div>
    </aside>

    //    {/* <!-- NOTE: 북마크에서 삭제했을 때 --> */}
    //    {/* <!-- <aside className="bookmark-toast">
    //    <h1 className="bookmark-title">스크랩북에서 삭제했습니다</h1>

    //    <button className="close-button" type="button" aria-label="닫기">
    //      <i className="ic-close" aria-hidden></i>
    //    </button>
    //  </aside> --> */}
  );
};

export default BookmarkToast;
