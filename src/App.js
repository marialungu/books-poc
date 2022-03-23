import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import aa from 'search-insights';

import 'instantsearch.css/themes/satellite.css';
import './App.css';
import SearchPage from './screens/search-page';
import BookPage from './screens/book-page';
import AppHeader from './components/header';

aa('init', {
  appId: 'FP907897DQ',
  apiKey: 'cad92f3af97b2106eebf573b5a8492d9',
});

aa('setUserToken', 'user-1');

function App() {
  return (
    <AppHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/products/:productID/:queryID" element={<BookPage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </AppHeader>
  );
}

export default App;
