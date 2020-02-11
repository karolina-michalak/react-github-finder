import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            placeholder='Search for users'
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
