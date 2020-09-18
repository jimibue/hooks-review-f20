import Axios from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {
  // default to array because I expect user to be an array
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // passing callback to be called when components mounts
  useEffect(() => {
    Axios.get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      // passing callback to catch to be called if fail
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setUsers([{ name: "james" }]);
      });
  }, []);
  // need const here in functinal component
  const renderUsers = () => {
    return users.map((user) => {
      return <div key={user.id}>{user.email}</div>;
    });
  };
  return (
    <div>
      <h1>Users</h1>
      {loading ? <p>loading</p> : renderUsers()}
    </div>
  );
};

export default Users;
