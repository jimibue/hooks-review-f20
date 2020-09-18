import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Demo from "./Demo";

const userData = [
  { name: "Frank", age: 21 },
  { name: "Bob", age: 22 },
];

const userData1 = [
  { name: "Sally", age: 21 },
  { name: "Rich", age: 22 },
];

// bad data doesn't mathch what I am expecting
// const userData2 = [
//   { fname: "Sally", uage: 21 },
//   { fname: "Rich", uage: 22 },
// ];

//useEffect(function( //do stuff but we can also return
//function which will get on unmount), state )

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      console.log("here!");
      document.title = `You clicked ${count} times`;
      if (count == 3) {
        setCount(0);
      }
      // componentWillUnMount
      return () => {
        console.log("unmounted");
      };
    },
    /* dictate when update is called */ []
  );
  return (
    <div>
      <h1>Hooks</h1>
      <h1>Counter example</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      {count}
      <Counter />
      <Demo />
      <Demo usersProp={userData} />
      <Demo usersProp={userData1} />
      {/* <Demo usersProp={userData2} /> */}
      <Demo usersProp={[{ name: "Jill", age: 21 }]} />
    </div>
  );
};

export default Hooks;
