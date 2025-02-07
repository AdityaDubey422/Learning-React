import React from 'react'

const Navpart2 = () => {
  return (
    <>
    <ul className="flex gap-15 items-center">
          <li className="relative group ">
            <a href="">Home</a>
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
          </li>
          <li className="relative group ">
            <a href="">About</a>
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
          </li>
          <li className="relative group ">
            <a href="">Contact US</a>
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
          </li>
          <li className="relative group ">
            <a href="">Services</a>
            <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
            <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-pink-400 group-hover:w-3/6"></span>
          </li>
        </ul>
    </>
  )
}

export default Navpart2