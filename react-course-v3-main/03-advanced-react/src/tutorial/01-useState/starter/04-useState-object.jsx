import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("personal trainer");

  const displayPerson = () => {
    setName("John");
    setAge(28);
    setHobby("joga ao computador, kek");
  };

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>Age: {age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button className='btn' type='button' onClick={displayPerson}>
        Show John
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
