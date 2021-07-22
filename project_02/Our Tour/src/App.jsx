import React from 'react'
// import { Data } from "./componants/Data";
import {Card} from './componants/Card'
import "./App.css";
const url="https://course-api.com/react-tours-project"
export const App = () => {
    let Data=[]
    const [data, setData] = React.useState(Data)
    const [loding, setLoding] = React.useState(true)
    const [refresh, setRefresh] = React.useState(false)
    const getData=async ()=>{
        setLoding(true)
        const resData=await fetch(url)
        const Data= await resData.json()
        console.log(Data);
        setData(Data)
        setLoding(false)
    }
    React.useEffect(() => {
        getData();
    }, [refresh])
    const removeCard=(id)=>{
         const friends = data.filter(friend => friend.id !== 
id);
        setData(friends)
    }
    return (
        <main>
            {loding?<h1>loding...</h1>:<><h1>OUR TOUR</h1>
                {data.map((piece)=>{
                    return (
                    <Card key={piece.id} {...piece} removeCard={removeCard}>
                    </Card>
                        )
                    })}
                    {data.length===0?<button onClick={()=>setRefresh(!refresh)} >Refresh</button>:null}</>}
            
        </main>
    )
}
