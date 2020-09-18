import React, { useState } from "react";
import UserForm from "./UserForm";

const User = ({ avatar, id, firstName, lastName, email, x }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <p>
        {email}
        <span onClick={() => setShowForm(!showForm)}> &#9998; </span>
      </p>
      {showForm && (
        <UserForm
          y={x}
          formType="edit"
          id={id}
          email={email}
          firstName={firstName}
        />
      )}
    </div>
  );
};

export default User;
