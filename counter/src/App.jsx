import { useState } from 'react' // use to import the useState hook from react library, useState is a function that allows us to add state to our functional components in React. It returns an array with two elements: the current state value and a function to update that state value.
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [variable, function] = useState(defaultValue)  => function is used to update the value of variable
  const [counter, setCounter] = useState(15)
  // let counter = 12

  const addValue = () => {
    console.log("clicked", counter); 
    if(counter >=200){
      alert("Counter value cannot be greater than 200");
      return;
    } 
    setCounter(counter + 1);
  }
  const removeValue = () => {
    console.log("clicked", counter);
    // add logic to prevent counter value from going below 0
    if(counter <= 0){
      alert("Counter value cannot be less than 0")
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Learning Hooks in React</h1>
      <h2>Counter value : {counter}</h2>
      

      <button onClick ={addValue}>Add Value</button>
      <br />
      <button onClick ={removeValue}>Remove Value</button>
    </>
  )
}

export default App
