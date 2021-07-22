import React from 'react'

export const Review = (props) => {
    console.log(props);
    const [count, setCount] = React.useState(1)
    const dataSize=Object.keys(props).length
    return (
        <>
            <article>
                <figure>
                <img src={props[count].image} alt="" />
                </figure>
                <div>
                    <h3>{props[count].name}</h3>
                    <h5>{props[count].job}</h5>
                    <p>{props[count].text}</p>
                </div>
                    <p className="changeReview"><span onClick={()=>setCount(count=>{return count-1>=0?count-1:dataSize-1})}><i className='fas fa-angle-left' style={{fontSize:'34px'}}></i></span><span onClick={()=>setCount(count=>{return count+1<dataSize?count+1:0})}><i className='fas fa-angle-right' style={{fontSize:'34px'}}></i></span></p>
                <button onClick={()=>setCount(Math.floor(Math.random()*dataSize))}>Random Review</button>
            </article>
        </>
    )
}
