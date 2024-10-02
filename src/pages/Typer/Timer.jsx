import React from 'react'
import { FaRegClock } from "react-icons/fa";

const Timer = () => {
  return (
    <div className=' flex gap-2 items-center font-medium'>
    <FaRegClock/>
    <p className=' font-TimeFont text-red-600'>Time Left: <span className=' text-green-600'>1 min</span></p>
    </div>
  )
}

export default Timer