import React from "react";

export const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <React.Fragment>
      <article className='book'>
        <h4 className='number'>{`#${number + 1}`}</h4>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
    </React.Fragment>
  );
};
