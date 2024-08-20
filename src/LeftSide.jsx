import React from 'react'
import Item from './Item'
export default function LeftSide({data}) {
  return (
    <div className='col-span-1 bg-slate-50 '>
        <div>
            <h1>Time</h1>
            <span>Completed</span>
        </div>
        <div>
            {data.map((item)=>(
                 <div key={item.id} className=''>
                
                 <h2>{item.task}</h2>
                 
                
                 
             </div>
            ))}
        </div>
    </div>
  )
}
