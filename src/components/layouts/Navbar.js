import React, { Component } from 'react';

export default class Navbar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
  };
  render() {
    return (
      <nav className='bg-primary navbar'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}
