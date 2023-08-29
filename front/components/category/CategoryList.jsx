import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryListMenu from './CategoryListMenu';

const CategoryList = () => {
  return (
    <section className="category-list">
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
      <CategoryListMenu />
    </section>
  );
};

export default CategoryList;
