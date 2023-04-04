import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent></RandomComponent>}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //someLogic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction;
