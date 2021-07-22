import React,{useState,createContext} from 'react'
import {Buttons} from './componants/Buttons'
import {Menu} from './componants/Data'
import { Cards } from "./componants/Cards";
import './App.css'
function App(){
    const [menu, setMenu] = useState(Menu)
return (
    <main>
        <section>
            <h1>Our Menu</h1>
            <Buttons Menu={[...Menu]} setMenu={setMenu}/>
            <Cards menu={[...menu]}/>
        </section>
    </main>
)
}
export {App};