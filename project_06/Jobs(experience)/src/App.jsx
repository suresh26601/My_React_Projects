import React,{useEffect,useState} from 'react'
import {Info} from './componants/Info'
import './App.css'

const url = 'https://course-api.com/react-tabs-project';
export default function App() {
    const [load, setLoad] = useState(true)
    const [Data,setData]=useState([])

    const fetchApi=async()=>{
        setLoad(true)
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        setData(data)
        setLoad(false)
    }

    useEffect(() => {
        fetchApi();
    }, [])
    if(load){
        return (
        <main>
            <section className="secMain">
                <h2>loading...</h2>
            </section>
        </main>
        )}

    else{
        return(
            <main>
            <section className="secMain">
                <h1>experience</h1>
                <Info Data={Data}/>
            </section>
        </main>
        )
    }
}
