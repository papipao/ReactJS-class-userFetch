import React from "react";

function UserList({ avatar_url, login, html_url }) {
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

export default UserList;
