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

//amazon best selling books - START ----------------------------------------------------------------
function BookList() {
  // return (
  //   <section className='booklist'>
  //     <Book
  //       img={books[0].img}
  //       title={books[0].title}
  //       author={books[0].author}
  //     ></Book>
  //     <Book
  //       img={books[1].img}
  //       title={books[1].title}
  //       author={books[1].author}
  //     ></Book>
  //   </section>
  // );
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
