import { useState } from "react";
import React from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick_increase = () => {
    setCount(count + 1);
  };

  const handleClick_decrease = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <div>
        <h2>{count}</h2>
        <button className='btn' type='button' onClick={handleClick_increase}>
          Increase
        </button>
      </div>
      <div style={{ margin: 10 }}>
        <button className='btn' type='button' onClick={handleClick_decrease}>
          Decrease
        </button>
      </div>
    </React.Fragment>
  );
};

export default ErrorExample;
