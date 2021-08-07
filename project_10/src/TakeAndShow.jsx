import {useState} from 'react'

export const TakeAndShow = () => {
    const [takeValue, setTakeValue] = useState('')
    
    return (
        <div className="takeshow">
            <div>
            <h1>Grocery Bud</h1>
            <input type="text" value={takeValue} onChange={(e)=>setTakeValue(e.target.value)}/>
            <button onClick={{}}> click me</button>
            </div>
            <div>

            </div>
        </div>
    )
}
