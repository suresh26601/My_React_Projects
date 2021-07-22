import React, { useState,useEffect } from "react";
import {Middle} from './Middle'
export const Review = ({ People }) => {
  const [reviewPerson, setReviewPerson] = useState(0);
  return (
    <article>
      <div className="changeReview">
        <i
          onClick={() =>
            setReviewPerson((reviewPerson) => {
              return reviewPerson - 1 >= 0
                ? reviewPerson - 1
                : People.length - 1;
            })
          }
          className="fas fa-angle-left"
        ></i>{" "}
      </div>
      {/* middle**** */}
      <div className="middle">
          {
              People.map((people,inx)=>{
                    return <Middle key={people.id} people={people} mid={reviewPerson} id={inx} len={People.length}/>
              })
          }
      </div>
{/* ********* */}
      <div className="changeReview">
        <i
          onClick={() =>
            setReviewPerson((reviewPerson) => {
                return reviewPerson + 1 < People.length ? reviewPerson + 1 : 0;
            })
        }
        className="fas fa-angle-right"
        ></i>
      </div>
    </article>
  );
};
