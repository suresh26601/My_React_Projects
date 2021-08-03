import React,{useState} from 'react'
import {ColorBox} from './components/ColorBox'
import Values from 'values.js'
import "./App.css"
const App = () => {
    const [takeColor, setTakeColor] = useState('')
    const [allColorValues, setAllColorValues] = useState(new Values('#f15025').all(10))
    const [isColor, setIsColor] = useState(true)
    const handleChangeColor=()=>{
        if(takeColor){
            try{
                const colorArr = new Values(takeColor).all(10)
                console.log(colorArr);
                setAllColorValues(colorArr)
                setTakeColor('')
                setIsColor(true)
            }
            catch{
                console.log("color not avilable")
                setIsColor(false)
            }
        }
    }

    return (
       <main>
           <section>
               <header>
                    <input type="text" placeholder="#342fea" value={takeColor} onChange={(e)=>setTakeColor(e.target.value)} />
                    <button onClick={handleChangeColor}>generate Color</button>
               </header>
               <footer>
                   {
                       allColorValues.map((color,id)=>{
                           return <ColorBox key={id} {...color} />
                       })
                   }
               </footer>
           </section>
       </main>
    )
}

export default App
