import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  /**
   * This function handles the submission of a form by adding a new user with a unique ID and name to
   * an array of users and resetting the name value.
   * @returns If the `name` value is falsy (e.g. an empty string), the function will return nothing and
   * exit early. Otherwise, it will create a new user object with a fake ID and the provided name, add
   * it to a new array with the existing users, update the state with the new array of users, and reset
   * the `name` value to an empty string.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //if no value do nothing
      return;
    }

    const fakeID = Date.now();
    const newUser = { id: fakeID, name: name };
    const updatedUsers = [...users, newUser];

    //DO
    setUsers(updatedUsers); //update the users array

    //clean the name value
    setName("");
  };

  /**
   * This function removes a user from an array of users based on their ID.
   */
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h3>User List</h3>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <button
                style={{ marginLeft: "20px" }}
                type='button'
                className='btn'
                onClick={() => removeUser(user.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
