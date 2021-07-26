import {incrValue,decrValue} from '../index'

const initialValue = {
    val : 0
}
export const changeValue=(state = initialValue,action)=>{
    console.log(action.type);
    switch (action.type) {
        case incrValue().type:return {val:state.val+ 1 }
        case decrValue().type:return {val:state.val- 1 }
        default: return state
    }
}