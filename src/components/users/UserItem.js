import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://api.github.com/users/mojombo'
  };
  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avatar_url}
          className='round-img'
          style={{ width: '60px' }}
        ></img>
      </div>
    );
  }
}

export default UserItem;
