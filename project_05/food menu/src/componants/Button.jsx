import React from 'react'

export const Button = ({btn,onChangeHandler}) => {
    return (
        <button value={btn} onClick={(e)=>{onChangeHandler(e.target.value)}}>{btn}</button>
    )
}
