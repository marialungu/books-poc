import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  RefinementList,
  Pagination,
  Highlight,
  ClearRefinements,
  Panel, DynamicWidgets, RatingMenu,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import 'instantsearch.css/themes/satellite.css';
import './App.css';

const searchClient = algoliasearch(
  'FP907897DQ',
  'cad92f3af97b2106eebf573b5a8492d9'
);

function App() {
  return (
    <Panel header="Header" footer="Test">
      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="books_poc">
          <ClearRefinements />

          <DynamicWidgets fallbackWidget={RefinementList}>
            <Panel header="Categories">
              <RefinementList attribute="categories" searchable />
            </Panel>
            <Panel header="Rating">
              <RatingMenu attribute="average_rating" />
            </Panel>
          </DynamicWidgets>
          {/*<div className="left-panel">*/}
          {/*  <h2>Categories</h2>*/}
          {/*  <RefinementList attribute="categories" />*/}
          {/*  <Configure hitsPerPage={8} />*/}
          {/*</div>*/}
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
                showLoadingIndicator={true}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </Panel>
  );
}

function Hit({ hit }) {
  const {
    title,
    authors,
    categories,
    average_rating,
    ratings_count,
    thumbnail,
    description,
  } = hit;
  return (
    <article>
      <img src={thumbnail} align="center" alt={title} />
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
