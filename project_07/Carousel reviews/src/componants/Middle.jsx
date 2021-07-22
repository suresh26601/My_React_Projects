import React,{useState,useEffect} from 'react'

export const Middle = ({people,mid,id,len}) => {
    const [People, setPeople] = useState([])
    const [Class, setClass] = useState("mid mid-next");
    const [last, setLast] = useState(len-1);
  useEffect(() => {
   setLast(mid - 1 >= 0 ? mid - 1 : len - 1)
}, [mid])
    useEffect(() => {
        if(mid===id){setClass("mid mid-mid")}
        else{setClass('mid mid-next')}
        if(last===id){setClass("mid mid-last")}
        setPeople(people)
    }, [last])
    return (
        <div className={Class}>
        <figure>
          <img src={People.image} alt="" />
        </figure>
        <div>
          <h3>{People.name}</h3>
          <h5>{People.title}</h5>
          <p>{People.quote}</p>
          <h1>
            <i
              className="material-icons"
              style={{ fontSize: "60px", color: "red" }}
            >
              format_quote
            </i>
          </h1>
        </div>
      </div>
    )
}
