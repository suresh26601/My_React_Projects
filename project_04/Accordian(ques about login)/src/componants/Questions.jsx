import React from 'react'
import { questions } from "./Data";
import { Question } from "./Question";
export const Questions = () => {
    return (
        <div className="questionsDiv">
            {questions.map((ele)=>{
                return <Question key={ele.id} {...ele}/>
            })}
        </div>
    )
}
