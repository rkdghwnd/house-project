import React from 'react';
import AppLayout from '../components/common/AppLayout';
import ProductsFilter from '../components/common/ProductsFilter';
import SearchProductsList from '../components/search/SearchProductsList';

const SearchResult = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <ProductsFilter />
            <SearchProductsList />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SearchResult;
