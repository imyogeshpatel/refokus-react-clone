import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='flex-grow px-5 py-4 border-t border-b border-r flex justify-between items-center border-zinc-500'>
        {}
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>

    </div>
  )
}

export default Stripe