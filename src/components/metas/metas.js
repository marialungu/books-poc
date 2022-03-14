import React from 'react';
import {
  ClearRefinements,
  CurrentRefinements,
  Stats,
} from 'react-instantsearch-dom';

import './metas.css';

const Metas = () => (
  <div className="metas-container">
    <div className="clear-refinements">
      <ClearRefinements />
    </div>
    <CurrentRefinements />
    <Stats />
  </div>
);

export default Metas;
