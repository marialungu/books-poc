import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import aa from 'search-insights';

import 'instantsearch.css/themes/satellite.css';
import './App.css';
import SearchPage from './screens/search-page';
import BookPage from './screens/book-page';
import AppHeader from './components/header';
import { APP_DETAILS } from './constants/app-details';

aa('init', {
  appId: APP_DETAILS.APP_ID,
  apiKey: APP_DETAILS.API_KEY,
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
