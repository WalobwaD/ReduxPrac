//Best practices
//assign a type string to a contant variable that will be used as an action
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

//Create actions using action creator functions with a type value of the const
//actions are simply javaScript objects with type, think of it as a stage that'll be used in your code
const loginAction = ()=>{
    return {
        type : LOGIN
    }
}
const logoutUser = ()=>{
    return {
        type : LOGOUT
    }
}

//Have a reducer function that handles a state, in this case we want to handle authentication state
const reducer = (state = {authenticated : false}, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return state
        default:
            state
    }
}

//create a store object using Redux create store
const store = Redux.createStore(reducer())

//have a dispath method that when called submits a new action to the store
store.dispatch(loginAction())
store.dispatch(logoutUser())



//Array and object methods to prevent state mutability
//Remember never to mutate state


//assign a const to a type which will be used in an action#
const WOKENUP = 'WAKEUP'

//create a action creator for comparison
const wokenUp = ()=>{
    return {
        type : WOKENUP
    }
}

//create an object to check status
const profile = {
    name : 'Juma',
    status: 'offline',
    activity: 'coding'
}


//have a reducer to manage state
const reducerObject = (state = profile, action)=>{
    switch(action.type){
        case WOKENUP:
            return Object.assign({}, state, {status:'online'})
    }
}

//vreate a store object for state storage
const storeObject = Redux.createStore(reducerObject)

//dispatch action to store
store.dispatch(wokenUp())



//if it is an array
//use
// Array.slice()
// Array.concat()
// [...state] -- spread operator