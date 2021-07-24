import React,{useState,useEffect} from 'react'

export const App = () => {
    const [person, setPerson] = useState({Name:'',Email:'',Number:''})
    const [people, setPeople] = useState('')
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setPerson({...person,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPeople([...people,{...person,id:new Date().getTime().toString()}])
        setPerson({Name:'',Email:'',Number:''})
    }
    useEffect(() => {
      console.log(people);
    }, [people])
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={person.Name} name='Name' onChange={handleChange} />
                <input type="email" value={person.Email} name='Email' onChange={handleChange} />
                <input type="number" value={person.Number} name='Number' onChange={handleChange} />
                <button type="submit" >SUBMIT</button>
            </form>
        </>
    )
}
