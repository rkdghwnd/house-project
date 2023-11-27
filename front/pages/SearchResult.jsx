import React from 'react';
import AppLayout from '../components/common/AppLayout';
import SearchProductsList from '../components/search/SearchProductsList';
import SearchButtonFilterList from '../components/search/SearchButtonFilterList';
import { Helmet } from 'react-helmet-async';

const SearchResult = () => {
  return (
    <>
      <Helmet>
        <title>내일의집 - 검색</title>
      </Helmet>
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
    </>
  );
};

export default SearchResult;
