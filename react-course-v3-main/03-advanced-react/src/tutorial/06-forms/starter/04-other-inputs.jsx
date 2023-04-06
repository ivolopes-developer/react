import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState(frameworks[0]);

  /**
   * This function handles the change event of a checkbox input and sets the value of a state variable
   * accordingly.
   */
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  /**
   * This function logs the value of the target element and sets the framework state to that value.
   */
  const handleFramework = (e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  };

  /**
   * The function handles form submission and logs the values of the "shipping" and "framework"
   * variables.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shipping, framework);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: "left" }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: "left" }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          {/* This code is rendering a dropdown menu with options for different frameworks (React,
          Angular, Vue, Svelte) using the `select` element. The `name` and `id` attributes are set
          to "framework" for identification purposes. The `onChange` event is set to the
          `handleFramework` function, which updates the `framework` state variable with the selected
          option. The `map` function is used to iterate over the `frameworks` array and create an
          `option` element for each framework, with the `key` attribute set to the framework name
          and the `value` attribute set to the framework name as well. The text displayed for each
          option is also set to the framework name. */}
          <select name='framework' id='framework' onChange={handleFramework}>
            {frameworks.map((framework) => (
              <option key={framework} value={framework}>
                {framework}
              </option>
            ))}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
