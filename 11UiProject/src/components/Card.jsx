import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";

const Card = (props) => {
  return (
    
    <div className='shrink-0 w-80 p-3 bg-cover bg-no-repeat rounded-4xl flex flex-col justify-between'
    style={{
      backgroundImage : `url(${props.img})`, 

    }}
    >
      <div className='h-10 w-10 bg-white rounded-full p-2 m-4 text-1xl font-bold text-black'>{props.number}</div>

      <div className='p-6'>
        <p className='leading-relaxed text-xl pr-10 text-white font-bold text-left'>{props.text}</p>

      </div>
      <button className='text-black ml-2 hover:bg-white flex gap-2 items-center bg-yellow-500 rounded-2xl p-3 text-sm '>{props.btntxt}<BsArrowRightCircleFill className='text-xl' /></button>

    </div>


    // <div className='h-150 w-80 p-3 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw8a-wZNL8PcXbSh77yB7PYW5ywvQB1hKZA&s)] bg-cover  rounded-4xl'>
    //   <div className='h-10 w-10 bg-white rounded-full p-2 m-4 text-1xl text-black'>1</div>

    //   <p className='mr-20 m-10 mt-50 text-xl pr-10 text-white font-bold'>Your money deserves security you can trust and service you can rely on—every step of the way.</p>
      
    //   <button className='text-white ml-2 flex gap-2 items-center bg-blue-500 rounded-2xl p-3 text-sm '>Satisfied<BsArrowRightCircleFill className='text-xl' /></button>
    // </div>
    
  )
}

export default Card
