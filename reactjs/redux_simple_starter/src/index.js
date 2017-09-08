import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API = 'AIzaSyBlbDN6ndZUlMl6wQWNhXAZznE7dodCsXQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

