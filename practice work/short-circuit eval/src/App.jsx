import React,{useState} from 'react'

export const App = () => {
    const [Value, setValue] = useState("hello user")
    // concept:short-circuit-evaluation 
    const dataOne=Value || 'this has not set yet.' // if first true then would take that otherwise would take second value
    const dataTwo = Value && "this has set.." //if first wrong would no value set otherwise would second value
    console.log(dataOne);
    console.log(dataTwo);
    return (
        <>
            <h1>{Value || "default value..."}</h1>
            <h1>{Value && "default value..."}</h1>
        </>
    )
}
