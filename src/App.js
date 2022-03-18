import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Pagination } from 'react-instantsearch-dom';
import 'instantsearch.css/themes/satellite.css';
import './App.css';
import BooksFilters from './components/books-filters';
import BookContainer from './components/book-container';
import Metas from './components/metas';

const searchClient = algoliasearch(
  '',
  ''
);

function App() {
  return (
    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="books_poc">
        <SearchBox
          className="searchbox"
          translations={{
            placeholder: '',
          }}
          showLoadingIndicator={true}
        />
        <div>
          <Metas />
        </div>
        <div className="results">
          <div className="left-panel">
            <BooksFilters />
          </div>
          <div className="search-panel">
            <BookContainer />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
