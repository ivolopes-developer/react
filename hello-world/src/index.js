import React from "react";
import ReactDOM from "react-dom/client";

//import files
import "./Styles/style.css";

const firstBook = {
  author: "Benjamin Hall",
  title: "A War Reporter's Mission to Make It Home",
  img: "https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL600_SR600,400_.jpg",
};

const secondBook = {
  author: "James Clear",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};

//amazon best selling books - START ----------------------------------------------------------------
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  );
}

const Book = (/* props */ { img, title, author }) => {
  /* const { img, title, author } = props; */
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
//amazon best selling books - END ----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
