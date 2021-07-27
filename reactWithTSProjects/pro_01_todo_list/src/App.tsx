import {FC,useState} from 'react'
import "./App.css"
export const App:FC = () => {
  interface TodoInterface{
    id:string,
    task:string
  }
  const [todoTask, setTodoTask] = useState<string>("")
  const [allTodos, setAllTodos] = useState<TodoInterface[]|never[]>([])
  const handleClick =():void=>{
    if (todoTask){
      const id:string=new Date().getTime().toString();
      const todoSingle ={id:id,task:todoTask}
      setAllTodos([...allTodos,todoSingle]);
      setTodoTask('');
    }
  }
  const removeTodo=(id:string):void=>{
    const restTodos:TodoInterface[]|never[] = allTodos.filter((ele)=>{
      return ele.id !== id
    })
    setAllTodos(restTodos)
  }
  return (
    <main>
      <section className="mainSec">
        <section className="secForInput">
          <input type="text" value={todoTask} placeholder="Enter Task..." onChange={(e)=>setTodoTask(e.target.value)}/>
          <button onClick={()=>handleClick()}>Add Me</button>
        </section>
        <section className="secForDisplay">
          {
            allTodos.map((ele)=>{
              return <div key={ele.id}><p>{ele.task}</p><button onClick={()=>removeTodo(ele.id)}>Remove</button></div>
            })
          }
        </section>
      </section>
    </main>
  )
}

