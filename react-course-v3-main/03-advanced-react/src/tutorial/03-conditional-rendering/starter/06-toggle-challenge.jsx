import { useState } from "react";

const ToggleChallenge = () => {
  const [isShown, SetIsShown] = useState(false);

  //other way
  /* const toggleView = () => {
    if (isShown) {
      SetIsShown(false);
      return;
    } else {
      SetIsShown(true);
    }
  }; */

  return (
    <div>
      {console.log(isShown)}
      {isShown && <MisteryComponent></MisteryComponent>}
      <button
        className='btn'
        type='button'
        onClick={
          () => SetIsShown(isShown ? false : true)
          /* SetIsShown(!isShown) */
        } /* onClick={toggleView} */
      >
        {isShown ? "Hide Content" : "Show Content"}
      </button>
    </div>
  );
};

const MisteryComponent = () => {
  return (
    <div>
      <h2>I'm Not Here, I wasn't There</h2>
    </div>
  );
};

export default ToggleChallenge;
