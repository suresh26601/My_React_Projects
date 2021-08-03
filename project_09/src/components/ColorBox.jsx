import React from 'react'

export const ColorBox = ({rgb}) => {
    console.log(rgb)
    return (
        <aside style={{backgroundColor:`rgb(${rgb})`}}>
            <h6>{rgb}</h6>
        </aside>
    )
}
