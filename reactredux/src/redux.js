import {createStore} from "redux"

const ADD ='ADD'

export const addedMessage = (message)=>{
    return {
        type : ADD,
        message
    }
}

const messageReducer = (state=[], action)=>{
    switch(action.type){
        case ADD:
            return [...state, action.message]
        default:
            return state
    }
}

const store = createStore(messageReducer);
export default store;


