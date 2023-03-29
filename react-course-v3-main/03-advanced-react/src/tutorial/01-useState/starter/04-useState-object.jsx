import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  /**
   * When the button is clicked, the person object is updated with a new name.
   */
  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "joga ao computador, lel" }); -> updates the entire object
    // setPerson("shakeAndBake"); ->
    // setPerson({ name: "susan" });
    setPerson({ ...person, name: "susan" });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' type='button' onClick={displayPerson}>
        Show John
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
