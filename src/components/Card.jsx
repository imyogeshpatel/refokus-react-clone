import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


const Card = ({width}) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl ${width} flex flex-col justify-between`}>

        <div className='w-full'>

            <div className='flex min-w-full justify-between items-center'>
                <h3>Just a heading</h3>
                <IoIosArrowRoundForward className='text-2xl' />
            </div>

            <div className='w-full'>
                <h2 className='text-3xl font-medium mt-6'>XYZ Heading</h2>
            </div>

        </div>

        <div className='w-full mt-32'>
            <h2 className='text-7xl font-semibold tracking-tight'>Start a Project</h2>
            <button className='px-4 py-1 border mt-5 border-zinc-500 rounded-full flex items-center'>Contact Us </button>
            <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet.</p>
        </div>

    </div>
  )
}

export default Card