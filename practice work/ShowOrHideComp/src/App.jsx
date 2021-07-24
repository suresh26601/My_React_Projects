import React, { useState,useEffect } from "react";

export const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Show/>}
    </>
  );
};

const Show = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSize=()=>{
      setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize',checkSize)
        return ()=>{
          window.removeEventListener('resize',checkSize)
        }
    }, [])
  return <h1>{size}</h1>;
};
export default Show;