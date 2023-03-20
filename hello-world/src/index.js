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

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL600_SR600,400_.jpg'
    alt='book1'
  />
);
const Title = () => {
  return <h2>A War Reporter's Mission to Make It Home</h2>;
};
const Author = () => <h4>Benjaming Hall</h4>;
//amazon best selling books - END ----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
