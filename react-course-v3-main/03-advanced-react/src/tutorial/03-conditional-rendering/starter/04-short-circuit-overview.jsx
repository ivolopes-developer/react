import { useState } from "react";

const ShortCircuitOverview = () => {
  const [name, setName] = useState("Susan"); //truthy
  const [text, setText] = useState(""); //falsy

  const codeExample = text || "hello world";

  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}
      {/* In JavaScript, the || operator returns the first operand if it is truthy,
      otherwise, it returns the second operand. In this case, "" (an empty
      string) is a falsy value, so the || operator returns the second operand,
      which is "hello world". */}
      <h4>Falsy OR: {text || "hello world"}</h4>
      {/* In JavaScript, the && operator returns the first operand if it is falsy,
      otherwise, it returns the second operand. In this case, "" (an empty
      string) is a falsy value, so the && operator returns "". */}
      <h4>Falsy AND: {text && "hello world"}</h4>
      {/* In JavaScript, the || operator returns the first operand if it is truthy, otherwise, it returns the second operand. In this case, "susan" is a truthy value, so the || operator returns "susan". */}
      <h4>Truthy OR: {name || "hello world"}</h4>
      {/* both truthy so: second value */}
      <h4>Truthy AND: {name && "hello world"}</h4>
      Code Example: {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
