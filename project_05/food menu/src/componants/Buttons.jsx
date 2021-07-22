import React,{useState,useEffect} from 'react'
import {Button} from './Button'
export const Buttons = ({Menu,setMenu}) => {
    const [Unique, setUnique] = useState([])
    useEffect(() => {
        const p=[...new Set(Menu.map(item => {
        return item.category}))]
        setUnique(p)
    }, [])
    
    const onChangeHandler=(val)=>{
        setMenu(Menu.filter((ele)=>{
            return ele.category===val;
        }))
    }
    return (
        <div className="buttonDiv">
            <button onClick={()=>setMenu(Menu)}>All</button>
            {Unique.map((btn,id)=>{
                return <Button key={id} btn={btn} onChangeHandler={onChangeHandler}/>
            })}
        </div>
    )
}

