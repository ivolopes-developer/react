import { useState } from "react";

const MultipleInputs = () => {
  /* This line of code is using the `useState` hook to create a state variable called `user` and a
  function called `setUser` to update the state. The initial state of `user` is an object with three
  properties: `name`, `email`, and `password`, all initialized to empty strings. This state is used
  to store the values of the input fields in the form. */
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  /**
   * The function updates the state of a user object with the new value of the input field and logs the
   * name and value of the updated field.
   */
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + " -> " + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={user.name}
            onChange={handleChange}
            name='name'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={user.email}
            onChange={handleChange}
            name='email'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={user.password}
            onChange={handleChange}
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
