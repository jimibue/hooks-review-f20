import Axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User";
import UserForm from "./UserForm";

const Users = () => {
  // default to array because I expect user to be an array
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // passing callback to be called when components mounts
  useEffect(() => {
    Axios.get("https://reqres.in/api/users?page=2")
      .then((res) => {
        const formatedUsers = res.data.data.map((u) => {
          let obj = { ...u, firstName: u.first_name };
          delete obj.first_name;
          return obj;
        });
        setUsers(formatedUsers);
        setLoading(false);
      })
      // passing callback to catch to be called if fail
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setUsers([{ id: 1, email: "dfd@.com", email: "james", avatar: "ss" }]);
      });
  }, []);
  // need const here in functinal component
  const renderUsers = () => {
    return users.map((user) => {
      return <User x={editUser} key={user.id} {...user} />;
    });
  };

  // a user has {email:'sdf', firstName:'sdf'} has more but we just use 2
  const addUser = (user) => {
    setUsers([{ ...user, id: Math.random() }, ...users]);
  };

  // user param we are expecting to look like this {id,email,firstName}
  // TYPEUSER =  {id:string,email:string,firstName:string}
  // function has one param that should look like this {id:string,email:string,firstName:string}
  // function return an array of {id:string,email:string,firstName:string} objects

  const editUser = (user) => {
    const newUsers = users.map((u) => {
      if (u.id === user.id) {
        //we want to change
        return user;
      }
      return u;
    });
    setUsers(newUsers);

    // this.setState({
    //   users:newUsers
    // })
  };
  return (
    <div>
      <h1>Users</h1>
      <UserForm formType="New" addUserProp={addUser} />
      {/* <UserForm addUserProp={(user) => setUsers([user, ...users])} /> */}
      {loading ? <p>loading</p> : renderUsers()}
    </div>
  );
};

export default Users;
