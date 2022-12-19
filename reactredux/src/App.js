import React from "react"
import DisplayMessages from "./DisplayMessages"
import {Provider} from "react-redux"
import store from "./redux"

function App (){
    // const name = useSelector((state)=>state)
    return (
        <Provider store={store}>
        <DisplayMessages/>

        </Provider>
    )
}

export default App