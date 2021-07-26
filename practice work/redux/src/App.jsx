import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
export const App = () => {
    const changeValue = useSelector(state => state.changeValue)
    const dispatch = useDispatch()
    return (
        <>
            <form action="" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" value={changeValue.val}/>
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment value</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement value</button>
            </form>
        </>
    )
}
