import React, { useReducer } from "react";
import { data } from "../../../data";

/* `const defaultState` is initializing the default state of the application. In this case, it is an
object with a property `people` that is set to the `data` array imported from an external file. This
default state will be used by the `useReducer` hook to initialize the state of the application. */
const defaultState = {
  people: data,
};

/**
 * This is a reducer function that takes in a state and an action and returns a new state based on the
 * action type.
 */
const reducer = (state, action) => {};

const ReducerBasics = () => {
  /* `useReducer(reducer, defaultState)` is a React hook that initializes a state and a dispatch
  function for updating that state. The `reducer` function is responsible for updating the state
  based on the action passed to it, and the `defaultState` is the initial state of the application.
  The `useReducer` hook returns an array with two elements: the current state and the dispatch
  function. */
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const resetPeople = () => {
    // setPeople(data);
  };

  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length != 0 ? (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      ) : (
        <button
          onClick={resetPeople}
          className='btn'
          style={{ marginTop: "2rem" }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
