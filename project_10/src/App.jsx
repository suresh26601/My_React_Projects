import { useState, useEffect, useReducer } from "react";
import "./App.css";
export const App = () => {
  const [takeValue, setTakeValue] = useState("");
  const [setStatus, setSetStatus] = useState({ value: "j", isStatus: false });
  const [getData, setGetData] = useState(
    JSON.parse(localStorage.getItem("Data"))
  );
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(getData));
    console.log(getData);
  }, [getData]);
  useEffect(() => {
    setTimeout(() => {
      setSetStatus({ ...setStatus, isStatus: false });
    }, 3000);
  }, [setStatus.value]);

  const handleBtn = () => {
    if (takeValue) {
      setSetStatus({ value: "one added", isStatus: true });
      setGetData([...getData, takeValue]);
      setTakeValue("");
    } else {
      setSetStatus({ value: "enter first something", isStatus: true });
    }
  };
  const handleDelete = (id) => {
    const remData = getData.filter((ele, val) => {
      return id !== val;
    });
    setSetStatus({ value: "one deleted", isStatus: true });
    setGetData(remData);
  };
  return (
    <main>
      <section>
        <aside className="status">
          {setStatus.isStatus ? <h1>{setStatus.value}</h1> : null}
        </aside>
        
        <aside className="takeshow">
          <div className='divTake'>
            <h1>Grocery Bud</h1>
            <input
              type="text"
              value={takeValue}
              onChange={(e) => setTakeValue(e.target.value)}
            />
            <button onClick={handleBtn}> click me</button>
          </div>

          <div className='divShow'>
            {getData.map((text, id) => {
              return (
                <article>
                  <p key={id}>{text}</p>
                  <button onClick={() => handleDelete(id)}>delete me</button>
                </article>
              );
            })}
          </div>

        </aside>

      </section>
    </main>
  );
};
