import React,{useState} from 'react'
import {Data} from './components/Data'
import './App.css'
export const App = () => {
    const [takeValue, settakeValue] = useState("")
    const [SetPara, setSetPara] = useState(0)
    return (
        <main>
            <section>
                <h1>generate random paragraph</h1>
                <input type="number" value={takeValue} onChange={(e)=>settakeValue(e.target.value)} />
                <button onClick={()=>{
                    if(takeValue){
                        if(takeValue<0){setSetPara(1)}
                        if(takeValue>0){setSetPara(parseInt(takeValue))}
                        settakeValue('')
                    }
                }}>Generate Para</button>
                <div>
                {
                    [...Array(SetPara)].map((ele,val)=>{
                        return <p key={val} onClick={(e)=>{setTimeout(() => {
                            e.target.style.display='none'
                        }, 2000);}}>{Data[val % Data.length]}</p>
                    })
                }</div>
            </section>
        </main>
    )
}
