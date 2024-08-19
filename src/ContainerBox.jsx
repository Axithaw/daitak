import React from 'react'
import NavBar from './NavBar'
import Box from './Box'


export default function ContainerBox({data}) {
  return (
    <div className='bg-white w-[900px]    border-gray-100 border-[3px] rounded-lg overflow-hidden shadow-lg' >
        <NavBar/>
        <Box  data= {data} />
    </div>
  )
}
