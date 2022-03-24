import React from 'react';
import { map } from 'ramda';
import { connectInfiniteHits } from 'react-instantsearch-dom';

import './books.css';
import PropTypes from 'prop-types';
import { recommendClient } from '../../constants/init-clients';
import { BOOKS_INDEX } from '../../constants/app-details';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import { TrendingItems } from '@algolia/recommend-react';
import SectionTitle from '../section-title';
import { RecommendProductCard, SearchProductCard } from '../product-card';

const BookContainer = ({ hits, hasMore, refineNext }) => (
  <>
    <TrendingItems
      recommendClient={recommendClient}
      indexName={BOOKS_INDEX}
      itemComponent={RecommendProductCard}
      view={HorizontalSlider}
      maxRecommendations={8}
      translations={{
        title: 'Most wanted books',
      }}
    />
    <div className="sliders">
      <TrendingItems
        recommendClient={recommendClient}
        indexName={BOOKS_INDEX}
        facetName="categories"
        facetValue="Fiction"
        itemComponent={RecommendProductCard}
        view={HorizontalSlider}
        maxRecommendations={8}
        translations={{
          title: 'Most wanted Fiction books',
        }}
      />
    </div>
    <div className="sliders">
      <TrendingItems
        recommendClient={recommendClient}
        indexName={BOOKS_INDEX}
        facetName="categories"
        facetValue="History"
        itemComponent={RecommendProductCard}
        view={HorizontalSlider}
        maxRecommendations={8}
        translations={{
          title: 'Most wanted History books',
        }}
      />
    </div>
    <SectionTitle />
    <div className="books-container">
      {map(book => <SearchProductCard hit={book} />)(hits)}
    </div>
    <div className="show-more">
      <button
        className="ais-ClearRefinements-button"
        onClick={refineNext}
        disabled={!hasMore}
      >
        Show more
      </button>
    </div>
  </>
);

BookContainer.propTypes = {
  hits: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  refineNext: PropTypes.func.isRequired,
};

export default connectInfiniteHits(BookContainer);
