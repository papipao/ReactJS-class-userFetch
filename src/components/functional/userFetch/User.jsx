import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const url = "https://api.github.com/users";

function User() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "1rem" }}>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => (
          <UserList key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
}

export default User;
