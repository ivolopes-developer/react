import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  /**
   * It takes an id as an argument, filters out the person with that id from the people array, and then
   * sets the people array to the new array
   */
  const removeItem = (id) => {
    console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);

    // setPeople(newPeople);
    setPeople(people.filter((person) => person.id !== id));
  };

  // const clearAllItems = () => {
  //   setPeople([]);
  // };

  return (
    <React.Fragment>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          // console.log(person);
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => removeItem(id)}
                style={{ marginBottom: 30 }}
                type='button'
              >
                delete name
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 100 }}>
        <button className='btn' onClick={() => setPeople([])} type='button'>
          delete all items
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateArray;
