import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  /* A hook that is called after every render. */
  useEffect(() => {
    console.log("hello from useEffect");
  }, [value, secValue]);

  // useEffect(() => {
  //   console.log("hello from useEffect (2nd value)");
  // }, [secValue]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        increase 1st value
      </button>
      <h1>second value : {secValue}</h1>
      <button className='btn' onClick={() => setSecValue(secValue + 1)}>
        increase 2nd value
      </button>
    </div>
  );
};
export default UseEffectBasics;
