import React from 'react'
import Button from './Button'

const Product = ({val}) => {
  return (
    <div className='w-full py-20'>
        <div className='max-w-screen-xl mx-auto text-white flex items-center justify-between px-20'>
            <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
            <div className='w-[38%]'>
                <p className='mb-10'>{val.desc}</p>
                <div className='flex gap-6'>
                  {val.liveButton && <Button title='Live Demo'/>}
                  {val.caseButton && <Button title='Case Study'/>}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Product