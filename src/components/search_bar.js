import React, {Component} from 'react';


// class-based component vs. function-based component

// React.Component could be simplified to Component.
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
