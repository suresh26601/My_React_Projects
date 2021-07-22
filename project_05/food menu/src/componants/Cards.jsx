import React from "react";

export const Cards = ({ menu }) => {
  return (
    <div className="Cards">
      {menu.map((element, val) => {
         const {img,title,category,price,desc}=element;
        return (
          <article key={val}>
            <img src={img} alt="title" />
            <div className='dishDscr'>
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h4>{price}</h4>
            <h6>{desc}</h6>
            </div>
          </article>
        );
      })}
    </div>
  );
};
