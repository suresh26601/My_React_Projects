import React from 'react'
export const Card = ({image,title,category,price}) => {
    return (
        <article>
            <img src={imag} alt="title" />
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h4>{price}</h4>
        </article>
    )
}
