import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
export default function Box({data}) {
  return (
    <div className='grid grid-cols-2 min-h-[600px] gap-1 bg-gray-100'>
        <LeftSide data={data} />
        <RightSide/> 
    </div>
  )
}
