import React from "react";
import ReactDOM from "react-dom/client";

// component or function
// function Greeting() {
//   return (
//     <div> or section
//       <div>
//         <h3>Hello People</h3>
//         <ul>
//           <li>
//             <a href='#'>Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//     </div>
//   );
// }
function Greeting() {
  return (
    <React.Fragment>
      <div className='someValue'>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href='#helloworld'>Hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type='text' name='' id='' />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
