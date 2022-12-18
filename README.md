<h1 align = "center">Redux</h1>
<p>Redux is a state management library, an application data-flow architecture to be specific</p>
<h3>Redux construction</h3>
<p>Redux uses a store object that store all state required by an application and needed to be passed on to yyour project components</p>

> Important Redux methods

<code>Redux.createStore()</code>

- The create store method is used to crate a store object for your redux program which will be exported and used in other components for state management
- The createStore(reducer) takes in a reducer as an argument (duscussed below)
- An optional argument passed to the createStore method is the Redux.middleWare() method which is used to handle async functions


```jsx

    const store = Redux.createStore(reducer)
```


<code>const reducer = ()=>{}</code>

- The reducer is a function used in redux that takes in state and actions as parameters and always returns a state(either updated or same if the conditions of the state rendering are met).
- Most preferrably use a <code>switch(){case}</code> statement for conditional rendering of the state to be passed to the store


```jsx
    const reducer = (state=defaultState, action)=>{
        switch(action.type){
            case CASE1:
                return state
            default:
                return state
        }
    }

```

<code>store.dispath()</code>

- The .dispatch() method is used to throw in actions to the store created using the redux createStore method
- Takes in an action object type as the parameter or most preferrably takes in a action creator as an argument to make your code simple and more readable
- Can optionally take in a callback as a second argument, but the callback is most prefarrably placed inside a function which is added as a parameter in the <code>.subscribe(callback)</code> method.

```jsx

    store.dispatch(action creator)
```

<code>store.subscribe(callback)</code>
 
- A special redux  method that adds a listener to a store
- Determines what a your program should execute immediately after a state is updated in the reducer
- Taked in a callback function created as an argument


<code>Redux.combineReducer()</code>

- This redux method combined multiple reducers in a redux file that will be used in the createStore method which can only be called once
- Takes in an object with key value pairs of reducers as an argument

```jsx
    const reducers = Redux.combineReducers({
        redu1 : nameOfReducer,
        redu2 : nameOfReducer
    })

```


<code>store.getState</code>

- This method is used in getting the current state of a redux store

```jsx
    const result = store.getState()
```
