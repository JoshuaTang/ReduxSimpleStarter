import React, {Component} from 'react';


// class-based component vs. function-based component
// only class-based component has constructor.
// state is a javascript object, exists in class-based component.

// controlled-component:
// state changed, the component changed.

// React.Component could be simplified to Component.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
