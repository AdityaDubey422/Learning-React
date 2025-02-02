import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>Hello world my name is broooo</div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "yoooooo loooooo"
const reactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"},
  "Click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
)
