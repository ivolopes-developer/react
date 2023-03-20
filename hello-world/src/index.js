import React from "react";
import ReactDOM from "react-dom/client";

//import files
import "./Styles/style.css";

const author = "Benjamin Hall";
const title = "A War Reporter's Mission to Make It Home";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/713F+ivM9NL._AC_UL600_SR600,400_.jpg";

//amazon best selling books - START ----------------------------------------------------------------
function BookList() {
  return (
    <section className='booklist'>
      <Book img={img} title={title} author={author}></Book>
      <Book img={img} title={title} author={author}></Book>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};
//amazon best selling books - END ----------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
