import React, { useState } from "react";

const UserForm = (props) => {
  const [email, setEmail] = useState(props.email ? props.email : "");
  const [firstName, setFirstName] = useState(
    props.firstName ? props.firstName : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // {email:'sdf', firstName:'sdf'}
    if (props.id) {
      // {id:string,email:string,firstName:string}
      props.y({ id: props.id, email, firstName }); //=>  editUse(user)
    } else {
      props.addUserProp({ email, firstName });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="firstName"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button type="submit">{props.formType}</button>
    </form>
  );
};

export default UserForm;
