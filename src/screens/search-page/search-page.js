import React from 'react';
import {
  InstantSearch,
  SearchBox,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom';
import RotateLoader from 'react-spinners/RotateLoader';

import Metas from '../../components/metas';
import BooksFilters from '../../components/books-filters';
import BookContainer from '../../components/book-container/book-container';
import './search-page.css';
import { searchClient } from '../../constants/init-clients';
import { BOOKS_INDEX } from '../../constants/app-details';

const BooksContainer = () => (
  <>
    <Metas />
    <div className="results">
      <div className="left-panel">
        <BooksFilters />
      </div>
      <div className="search-panel">
        <BookContainer />
      </div>
    </div>
  </>
);

const PageContent = connectStateResults(({ isSearchStalled }) =>
  isSearchStalled ? (
    <div className="loader">
      <RotateLoader color={'#9698c3'} size={13} />
    </div>
  ) : (
    <BooksContainer />
  )
);

const SearchPage = () => (
  <div className="container">
    <InstantSearch searchClient={searchClient} indexName={BOOKS_INDEX}>
      <Configure clickAnalytics />
      <SearchBox
        className="search-box"
        translations={{
          placeholder: 'Search for your favorite books...',
        }}
        showLoadingIndicator={true}
      />
      <PageContent />
    </InstantSearch>
  </div>
);

export default SearchPage;
