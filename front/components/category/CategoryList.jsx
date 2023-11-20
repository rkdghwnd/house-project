import React from 'react';
import CategoryListMenu from './CategoryListMenu';
import shortid from 'shortid';
import { categoryListDatas } from '../../datas/category';

const CategoryList = () => {
  return (
    <section className="category-list">
      {categoryListDatas.map((category) => {
        return <CategoryListMenu key={shortid.generate()} {...category} />;
      })}
    </section>
  );
};

export default CategoryList;
