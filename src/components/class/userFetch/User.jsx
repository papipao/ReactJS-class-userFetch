import React, { Component } from "react";
import UserList from "./UserList";

const url = "https://api.github.com/users";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({
      users: data,
    });
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", marginTop: "1rem" }}>GitHub Users</h3>
        <ul className="users">
          {this.state.users.map((user) => (
            <UserList key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
