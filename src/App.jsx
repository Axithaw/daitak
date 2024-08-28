import React, { useState } from 'react'
import NavBar from './NavBar'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function App() {
  const [data, setData] = useState([
  ])

  
  

const [nextId,setNextId] = useState(3);

  return (
    <div className='bg-yellow-100 w-full min-h-screen flex justify-center items-center'>
        <div className='bg-white w-[900px]    border-gray-100 border-[3px] rounded-lg overflow-hidden shadow-lg' >
        <NavBar/>
        <div className='grid grid-cols-2 min-h-[600px] gap-1 bg-gray-100'>
        <LeftSide data={data} setData={setData} />
        <RightSide data={data}  setData={setData} nextId={nextId} setNextId={setNextId}/> 
    </div>
    </div>
    </div>
  )
}
