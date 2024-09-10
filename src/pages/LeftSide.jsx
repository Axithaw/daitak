import React, { useState  } from 'react'
import Item from '../components/Item'
import Header from '../components/Header';

export default function LeftSide({data,setData}) { 

  let countChecked = data.map(key => key.completed)
// console.log(countChecked)
 let value =countChecked.filter(completed => completed == true)
//  console.log(value.length)

  const handleDelete = (id)=>{
    setData(data.filter((item)=>(item.id !== id)))
  }

  const handleCheckbox = (id, completed)=>{

    setData(prevData => {
     return prevData.map(
        item =>   item.id === id?
        {...item, completed ,id}: item
      )
     }
    )}

  return (
    <div className='col-span-1 bg-slate-50 '>

       {/* LeftSide header */}

       <Header
          countChecked = {countChecked}
          value={value }
       />

        {/* list */}
        <div className=''> 
            {data.map((item)=>(
                 <Item
                  item={item}
                  key = {item.id}
                  handleDelete = {handleDelete}
                  handleCheckbox = {handleCheckbox}
                 />
            ))}

        </div>
    </div>
  )
}
