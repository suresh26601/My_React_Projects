import React from 'react'
import { Header } from "./componants/Header";
import { Questions } from "./componants/Questions";
import './App.css'
export const App = () => {
    return (
        <main>
            <section className="secMain">
                <Header/>
                <Questions/>
            </section>
        </main>
    )
}
