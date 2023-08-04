import React from 'react';

// 북마크 되어있을 때
// -> icon className에 ic-bookmark-filled(아이콘 안쪽 색상(filled 아이콘으로 변경))
// -> order cta에 is-active 추가(아이콘 테두리 색상 color: $blue)
//
// 안되있을 때 -> icon className에 ic-bookmark
// order cta 에 is-active 삭제

// <!-- <button
//   class="bookmark-button is-active btn-55"
//   type="button"
//   aria-label="북마크에 해제"
// >
//   <i class="ic-bookmark-filled" aria-hidden></i>
// </button> -->
// {/* <!-- NOTE: 북마크를 하지 않았을 때 --> */}

const ProductBookmark = ({ isInForm }) => {
  return isInForm ? (
    <button
      className="bookmark-button btn-55"
      type="button"
      aria-label="북마크에 추가"
    >
      <i className="ic-bookmark" aria-hidden></i>
    </button>
  ) : (
    <button className="btn-ghost btn-48" type="button">
      <i className="ic-bookmark" aria-hidden></i>
      <span aria-label="북마크 18,302회">18,302</span>
    </button>

    //   {/* <!-- NOTE: 북마크를 했을 때 -->
    // <!-- <button className="btn-ghost btn-48 is-active" type="button">
    //   <i className="ic-bookmark-filled" aria-hidden></i>
    //   <span aria-label="북마크 18,303회">18,303</span>
    // </button> --> */}
  );
};

export default ProductBookmark;
