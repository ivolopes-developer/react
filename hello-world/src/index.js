import React from "react";
import ReactDOM from "react-dom/client";

//import files
import "./Styles/style.css";

//amazon best selling books - START ----------------------------------------------------------------
function BookList() {
  return (
    <section className='booklist'>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const author = "Benjamin Hall";
const Book = () => {
  const title = "A War Reporter's Mission to Make It Home";
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL600_SR600,400_.jpg'
        alt='book1'
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
//amazon best selling books - END ----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
