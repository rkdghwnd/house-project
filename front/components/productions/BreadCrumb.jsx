import React from 'react';
import { useSelector } from 'react-redux';
import { categoryListDatas } from '../../datas/category';

const BreadCrumb = () => {
  const { productions } = useSelector((state) => state.productions);
  const categoryInfo = categoryListDatas.find(
    (el) => el.indexUnit === parseInt(productions.category_index / 10)
  );

  return (
    <div className="breadcrumb">
      <a href="/">{categoryInfo?.title}</a>
      <i className="ic-chevron" aria-hidden></i>
      <a href="/">
        {categoryInfo?.subCategories[productions?.category_index % 10]}
      </a>
    </div>
  );
};

export default BreadCrumb;
