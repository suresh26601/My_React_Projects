import React from 'react'
import { People } from "./componants/Data";
import {Review} from './componants/Review'
import "./App.css"
export const App = () => {
    return (
        <main>
            <section>
                <Review People={[...People]}/>
            </section>
        </main>
    )
}
