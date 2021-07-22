import React from 'react'
import Data from './componants/Data'
import {Review} from './componants/Review'
import "./App.css"
export const App = () => {
    return (
        <main>
                <h1>Reviews</h1>
                <Review {...Data} />
        </main>
    )
}
