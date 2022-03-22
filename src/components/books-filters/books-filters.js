import React from 'react';
import { DynamicWidgets, Panel, RefinementList } from 'react-instantsearch-dom';

const BooksFilters = () => (
  <>
    <DynamicWidgets fallbackWidget={RefinementList}>
      <Panel header="Categories">
        <RefinementList attribute="categories" searchable />
      </Panel>
      <Panel header="Authors">
        <RefinementList attribute="authors" searchable />
      </Panel>
    </DynamicWidgets>
  </>
);

export default BooksFilters;
