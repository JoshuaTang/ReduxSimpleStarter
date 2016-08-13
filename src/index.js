// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));



import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyARzLoBx5a9YOTHmWUFGxIyzDLpnUxYcO4";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});


// Create a new component. This component should produce some HTML.
// const: final value of the variable.
// functional component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page
// (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
