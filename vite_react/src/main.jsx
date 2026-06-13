import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react' 
import App from './App.jsx'

function MyApp(){
  const username = "Alok"
  return(
    <div>
      <h1>
        Hi, {username}! This is my custom app in main.jsx file
      </h1>
    </div>
  )
}


// Custom react Element
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com',target: '_blank'},
  'Click me to visit Google'
)

createRoot(document.getElementById('root')).
render(
  <App/>
)
