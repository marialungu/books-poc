import React from 'react';
import { DynamicWidgets, Panel, RefinementList } from 'react-instantsearch-dom';

const BooksFilters = () => (
  <>
    <DynamicWidgets fallbackWidget={RefinementList}>
      <Panel header="Categories">
        <RefinementList attribute="categories" searchable />
      </Panel>
    </DynamicWidgets>
  </>
);

export default BooksFilters;
