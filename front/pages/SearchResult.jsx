import React from 'react';
import AppLayout from '../components/common/AppLayout';
import SearchProductsList from '../components/search/SearchProductsList';
import SearchButtonFilterList from '../components/search/SearchButtonFilterList';

const SearchResult = () => {
  return (
    <AppLayout>
      <main className="search-result">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <SearchButtonFilterList />
              <SearchProductsList />
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default SearchResult;
