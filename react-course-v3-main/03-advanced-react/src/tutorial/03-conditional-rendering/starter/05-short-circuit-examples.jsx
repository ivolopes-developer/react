import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* return first if it's truthy if falsy return scnd */}
      <h4>{text || "default value"}</h4>

      {/* return first if it's falsy if truthy return scnd */}
      {/* {text && (
        <div>
          <h2>whate ever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}

      {user && <SomeComponent name={user.name} />}

      <h2 style={{ marginTop: "200px" }}>Ternary Operator</h2>
      {/* {user ? <SomeComponent name={user.name} /> : "é falso"} */}
      <button className='btn'>{isEditing ? "edit" : "add"}</button>

      {/* verify if user exists, if not return "please login" */}
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
        </div>
      ) : (
        "Please LogIn"
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>whate ever return</h4>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExamples;
