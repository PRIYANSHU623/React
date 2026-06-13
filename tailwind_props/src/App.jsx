import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj ={
    username: "Priyanshu",
    age: 22, 
    email: "priyanshu@example.com"
  }

  let newArr = [1,2,3,4];

  return (
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-lg">Tailwind Test</h1>
      <Card username="Learning React" someObject = {myObj} someArr = {newArr}/>
      <Card username="Learning Props" someObject = {myObj} someArr = {newArr}/>
      <Card username="Learning Tailwind" someObject = {myObj} someArr = {newArr}/>
    </> 
  );
}

export default App;
