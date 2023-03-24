import React from "react";
import ReactDOM from "react-dom/client";

//import files
import "./Styles/style.css";

//array of books
const books = [
  {
    author: "Benjamin Hall",
    title: "A War Reporter's Mission to Make It Home",
    img: "https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    id: 2,
  },
];

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
function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props;

  return (
    <React.Fragment>
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={() => getBook(id)}>Click me</button>
        <h4>{author}</h4>
      </article>
    </React.Fragment>
  );
};
//amazon best selling books - END ----------------------------------------------------------------

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
