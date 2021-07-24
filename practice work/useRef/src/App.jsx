import React,{useRef,useState,useEffect} from 'react'

export const App = () => {
    const inpName = useRef('')
    const inpEmail = useRef('')
    const [people, setPeople] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (inpEmail.current.value && inpName.current.value){
        setPeople([...people,{Email:inpEmail.current.value,Name:inpName.current.value,id:new Date().getTime().toString()}])
        inpEmail.current.value=''
        inpName.current.value=''
       }
    }
    useEffect(() => {
        console.log(people);   
     }, [people])
    return (
        <>
           <form action="" onSubmit={handleSubmit}>
               <input type="text" placeholder="name" ref={inpName}/>
               <input type="email" placeholder="email" ref={inpEmail} />
               <button type="submit">submit</button>
           </form>
        </>
    )
}
