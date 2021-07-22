import React from 'react'

export const Card = ({id,name,info,image,removeCard}) => {
    const [desc, setDesc] = React.useState(false)
    return (
        <>
            <article className="card">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <h5>{name}</h5>
                <p>{desc?info:`${info.substring(0,100)}`}<span onClick={()=>setDesc(!desc)}>{desc?' ...Show Less':' ...Read More'}</span></p>
                <button onClick={()=>{removeCard(id)}}>Not Interested</button>
            </article>
        </>
    )
}
