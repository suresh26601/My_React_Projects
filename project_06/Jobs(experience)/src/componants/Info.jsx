import React,{useState} from 'react'

export const Info = ({Data}) => {
    const [value, setValue] = useState(0)
    const {title,dates,duties,company}=Data[value]
    return (
        <div>
            {
                Data.map((item,val)=>{
                    return <button key={item.id} onClick={()=>{setValue(val)}} className={value===val&&'active'}>{item.company}</button>
                })
            }
        <section>
            <h3>{title}</h3>
            <p>{dates}</p>
            <h6>{company}</h6>
            {
                duties.map((duty)=>{
                    return (<section >
                    <i className="material-icons">fast_forward</i>
                    <h5>{duty}</h5>
                    </section>)
                })
            }
            
        </section>
        </div>
    )
}
