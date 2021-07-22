import React,{useState,useEffect} from 'react'

export const App = () => {
    const [size, setSize] = useState(window.innerWidth)

    const changeWidht=()=>{
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("call me");
        window.addEventListener("resize",changeWidht)
        return () => {
            window.removeEventListener("resize",changeWidht)
        }
    },[])
    return (
        <div>
            <h2>{size}</h2>
        </div>
    )
}
