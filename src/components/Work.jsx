import React from 'react'

const Work = () => {


    const images = [

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top:"50%",
            left:"50%",
            isActive:true
        },

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top:"56%",
            left:"46%",
            isActive:false
        },

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top:"46%",
            left:"56%",
            isActive:false
        },

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top:"40%",
            left:"60%",
            isActive:false
        },

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top:"60%",
            left:"40%",
            isActive:false
        },

        {
            url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top:"55%",
            left:"55%",
            isActive:false
        },
    ]

  return (
    <>
    <div className='max-w-screen-xl mx-auto mt-4'>
        <div className='relative'>
            <h1 className='text-[28vw] leading-none text-center font-medium select-none'>Work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem, index)=>(elem.isActive && (<img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top, left:elem.left}} src={elem.url}/>)))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Work