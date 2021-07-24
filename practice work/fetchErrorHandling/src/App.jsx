import React,{useState,useEffect} from 'react'
const url="https://api.github.com/users/QuincyLsarson"
export const App = () => {
    const [load, setLoad] = useState(true)
    const [err, setErr] = useState(false)
    const [user, setUser] = useState("0")

    useEffect(() => {
       fetch(url)
       .then((res)=>{
        //    console.log(res);
           if (res.status<399){
               return res.json()}
            else{
            setLoad(false)
            setErr(true)
            throw new Error(res.statusText)
            }
        })
       .then(data=>{setUser(data.followers)})
       .catch(Err=>{console.log("error occured ishhk",Err)})
       setLoad(false)
       setErr(false)
    }, [])

    if(load){
        return <h3>Loding...</h3>
    }
    if(err){
        return <h3>Error....</h3>
    }
    if(!load && !err ){
    return (
        <>
            <h2>users are...{user}</h2>
        </>
    )
}
}