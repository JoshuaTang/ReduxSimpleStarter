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



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyARzLoBx5a9YOTHmWUFGxIyzDLpnUxYcO4";


// Create a new component. This component should produce some HTML.
// const: final value of the variable.
// functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });  // ES6 syntax
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}


// Take this component's generated HTML and put it on the page
// (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
