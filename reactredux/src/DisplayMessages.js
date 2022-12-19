import React from "react"
import {useSelector, useDispatch } from "react-redux"
import { addedMessage } from "./redux"

function DisplayMessages(){

  const [input, setInput] = React.useState('')
  const messages = useSelector((state)=>state)
  const dispatch = useDispatch()


  let handleChange= (event)=>{
    setInput((
      event.target.value
    ))
  }
  let submitMessage = ()=> { 
    setInput(('')) 
    dispatch(addedMessage(input))
  }
    return (

    <section className="content text-gray-400 h-full bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Type in a list of todos:</h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
         <div className="relative sm:mb-0 flex-grow w-full">
           <label for="full-name" className="leading-7 text-sm text-gray-400">Todo...</label>
           <input value={input} onChange={handleChange} type="text" id="full-name" name="full-name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button onClick={submitMessage} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

        </div>
        <ul className="flex flex-col justify-items-center items-center text-gray-100 text-2xl mt-9">
          <div>{input}</div>
          {messages.map( (message, idx) => {
              return (
                 <li className="mt-3 list-decimal text-end" key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    </section>
    );
  }


export default DisplayMessages;



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: '',
  //     messages: []
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.submitMessage = this.submitMessage.bind(this);
  // }

     // this.setState((state) => {
    //   const currentMessage = state.input;
    //   return {
    //     input: '',
    //     messages: state.messages.concat(currentMessage)
    //   };
    // });