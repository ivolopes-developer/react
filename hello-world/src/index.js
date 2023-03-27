import React from "react";
import ReactDOM from "react-dom/client";

//import files
import "./Styles/style.css";
import { books } from "./books.js";
import { Book } from "./Book";

// const EventExamples = () => {
//   // const handleFormInput = (e) => {
//   //   console.log(e.target);
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   //   console.log("handle form input");
//   // };

//   // const handleButtonClick = () => {
//   //   alert("handle button click");
//   // };

//   // const handleFormSubmission = (e) => {
//   //   e.preventDefault();
//   //   console.log("form submission done");
//   // };

//   return (
//     <React.Fragment>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='product'
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: "1rem 0" }}
//         />
//         <div>
//           <button
//             type='button'
//             /* onClick={handleFormSubmission} */ onClick={() =>
//               console.log("click me")
//             }
//           >
//             Form Submit
//           </button>
//         </div>
//       </form>
//       {/* <button onClick={handleButtonClick}>Click Me</button> */}
//     </React.Fragment>
//   );
// };

//amazon best selling books - START ----------------------------------------------------------------
const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };

  return (
    <React.Fragment>
      <h1 className='title'>Amazon Best Selling Books</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index}></Book>;
        })}
      </section>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <div>
        <BookList></BookList>
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
