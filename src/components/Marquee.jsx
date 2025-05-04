import React from 'react'
import { ImGift } from 'react-icons/im'

const Marquee = ({imagesURLs}) => {
  return (
    <div className='flex w-full py-5 items-center justify-center gap-5'>
        {imagesURLs.map(url => <img src={url} className=''/>)}
    </div>
  )
}

export default Marquee