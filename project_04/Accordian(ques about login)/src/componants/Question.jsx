import React,{useState} from 'react'

export const Question = ({id,title,info}) => {
    const [Info, setInfo] = useState(false)
    return (
        <article>
            <h3>{title}</h3>
            {Info?<><i className="material-icons" onClick={()=>setInfo(!Info)}>remove_circle_outline</i><p>{info}</p></>:<i className="material-icons"  onClick={()=>setInfo(!Info)}>add_circle_outline</i>}
            
        </article>
    )
}
