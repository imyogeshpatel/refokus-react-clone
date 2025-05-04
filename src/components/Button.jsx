import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-36 px-4 py-2 bg-white text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight className='text-xl'/>

    </div>
  )
}

export default Button