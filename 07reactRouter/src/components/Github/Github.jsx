import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    //  const [data, setdata] = useState([])

    // useEffect(() => {
    //  fetch("https://api.github.com/users/kalesh-94")
    // .then((res)=> res.json())
    // .then((data)=>{
    //     console.log(data);
    //     setdata(data);
        
    // })
    // }, [])
    

  return (
    <>
    <div className='bg-gray-200 text-center text-2xl  font-bold drop-shadow-md'>
        Github Account: {data.login} <br />
        Github Followers: {data.followers}

    <div className="md:5/12 lg:w-5/12 " >
        <img className='w-96 border-s-orange-900 shadow border-r-amber-700 rounded-xl'
            src={String(data.avatar_url)} alt="image"/>
    </div>
    </div>
    </>
    
    
  )
}

export default Github

export const githubInfoLoader = async ()=>{

    const response  = await fetch("https://api.github.com/users/kalesh-94")
    return response.json()

}