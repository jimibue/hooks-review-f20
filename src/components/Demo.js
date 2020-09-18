import React, { useState, useEffect } from "react";

// how we did with a class component
// state = {
//   users:[
//     { name: "Frank", age: 21 },
//     { name: "Bob", age: 22 },
//   ],
//   showUsers:false
// }

//usersProp = [] default value of array in the case props is not passed
const Demo = ({ usersProp = [] }) => {
  // useState gives me a way to get the state and set the state
  // const [getter, setter] = useState(initialValue)
  const [users, setUsers] = useState(usersProp);
  const [count, setCount] = useState(0);
  const [showUsers, setShowUsers] = useState(true);

  // in class we do this
  // toggleUser(){
  //   this.setState({
  //     showUsers: !this.state.showUsers
  //   })
  // }

  // in functional component
  // setShowUsers(!showUsers)

  // Init) render => componentDidMount (Happens once at start)
  // state is changed) => setState => render => componentDidUpdate
  // new props is passed to component) => render => componentDidUpdate
  // state is changed) => setState => render => componentDidUpdate
  // state is changed) => setState => render => componentDidUpdate
  // new props is passed to component) => render => componentDidUpdate
  // component is unmounted(not render) => componentWillUnmount (Happens once at end)

  //Use effect can behave like componentDidMount
  useEffect(() => {
    setUsers([...users, { name: "new", age: Math.floor(Math.random() * 100) }]);
  }, []);

  // how we do it with a class
  //componentDidMount(){
  //this.setState({
  //   users:[...this.state.users, { name: "new", age: Math.floor(Math.random() * 100) }]
  // })
  //}

  function renderUsers() {
    return users.map((user) => {
      return (
        <div>
          {user.name} is {user.age} old
        </div>
      );
    });
  }
  return (
    <div>
      <h1>Demo</h1>
      {showUsers && renderUsers()}
      <button onClick={() => setShowUsers(!showUsers)}>toggle</button>
    </div>
  );
};

export default Demo;
