import React from "react";

export const List = ({ id, name, age, image }) => {
  return (
    <>
      <article className="divmain">
        <div className="imageDiv">
          <img src={image} alt={name} />
        </div>
        <div className="detailsDiv">
          <p>{name}</p>
        </div>
        <div className="detailsDiv">
          <p>{age}</p>
        </div>
      </article>
    </>
  );
};
