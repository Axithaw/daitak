import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function App() {
  const [data, setData] = useState([
  ])
  // const dataLength = data.length;

  // const [count , setCount] = useState(0)

// const [nextId,setNextId] = useState(3);

// let countChecked = data.map(key => key.completed)
// // console.log(countChecked)
//  let value =countChecked.filter(completed => completed == true)
//  console.log(value.length)
useEffect(()=>{
  // console.log(data)
  // let countChecked = data.map(key => key.completed)
  // // console.log(countChecked)
  //  let value =countChecked.filter(completed => completed == true)
  //  console.log(value.length)
},[data])

  return (
    <div className='bg-yellow-100 w-full min-h-screen flex justify-center items-center'>
        <div className='bg-white w-[900px]    border-gray-100 border-[3px] rounded-lg overflow-hidden shadow-lg' >
        <NavBar/>
        <div className='grid grid-cols-2 min-h-[600px] gap-1 bg-gray-100'>
        <LeftSide data={data} setData={setData}   />
        <RightSide data={data}  setData={setData}/> 
    </div>
    </div>
    </div>
  )
}
