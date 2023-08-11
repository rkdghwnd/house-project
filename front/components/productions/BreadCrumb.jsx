import React from 'react';

const BreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="/">가전</a>
      <i className="ic-chevron" aria-hidden></i>
      <a href="/">계절가전</a>
      <i className="ic-chevron" aria-hidden></i>
      <a href="/">전기히터/온풍기</a>
      <i className="ic-chevron" aria-hidden></i>
      <a href="/">전기히터</a>
    </div>
  );
};

export default BreadCrumb;
