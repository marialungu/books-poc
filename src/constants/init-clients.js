import algoliasearch from 'algoliasearch/lite';
import recommend from '@algolia/recommend';
import { APP_DETAILS } from './app-details';

export const searchClient = algoliasearch(
  APP_DETAILS.APP_ID,
  APP_DETAILS.API_KEY
);

export const recommendClient = recommend(
  APP_DETAILS.APP_ID,
  APP_DETAILS.API_KEY
);
