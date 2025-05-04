import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-6 flex items-center justify-between border-b border-zinc-500">

        <div className='navleft flex items-center'>

          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />

          <div className='links flex gap-16 text-sm items-center ml-20'>
              {["Home","Work","Culture", "", "News"].map((elem,index)=>(
                elem.length===0 ? <span className='w-[1px] h-8 bg-zinc-500'></span> : (
                <a className='flex items-center gap-1' href='#'>
                  {index===1 && (<span className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)}
                  {elem}
                </a>)
              ))}
          </div>

        </div>
        
        <div className='navright'>
              <Button/>
        </div>

    </div>
  )
}

export default Navbar