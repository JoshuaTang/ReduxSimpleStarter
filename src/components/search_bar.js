import React, {Component} from 'react';


// class-based component vs. function-based component
// only class-based component has constructor.
// state is a javascript object, exists in class-based component.


// React.Component could be simplified to Component.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    )
  }

}

export default SearchBar;
