import React,{useState} from "react";
import { Data } from "./componants/Data";
import "./App.css";
import { List } from "./componants/List";
export const App = () => {
    const [data, setData] = useState(Data)
  return (
    <>
      <main>
        <section className="MainSec">
            <h2 onClick={()=>setData(Data)}>BIRTHDAY REMINDER</h2>
          {data.map((person) => {
            return <List key={person.id} {...person} />;
          })}
        </section>
        <button onClick={()=>setData([])}>Clear All</button>
      </main>
    </>
  );
};
