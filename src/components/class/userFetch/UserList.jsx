import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <li>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
      </li>
    );
  }
}

export default UserList;
