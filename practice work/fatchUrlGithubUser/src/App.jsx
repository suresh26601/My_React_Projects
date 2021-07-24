import React,{useState,useEffect} from 'react'
import './App.css'
const url="https://api.github.com/users"
export const App = () => {
    const [Load, setLoad] = useState(true)
    const [Result, setResult] = useState(0)
    const Data = async () => {
        setLoad(true)
        const res= await fetch(url)
        const data=await res.json();
        setResult(data)
        setLoad(false)
    }
    useEffect(() => {
        Data();
    }, [])
    if(Load){
        return <h2>L o d i n g. . . . .</h2>
    }
    return (
        <>
            <h1>Github User</h1>
            <ul>
                {
                    Result.map((val)=>{
                        const {avatar_url,login,id,html_url}=val;
                        return (
                        <li key={id} >
                            <img src={avatar_url} alt="not loaded yet..." />
                            <section>
                            <h5 >{login}</h5>
                            <a href={html_url} target="_blank">profile</a>
                            </section>

                        </li>)
                    })
                }
            </ul>
        </>
    )
}
