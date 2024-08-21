import React, { useState } from 'react'
import moment from 'moment'

export default function LeftSide({data,setData}) {

  const dataLength = data.length

  const [Completed, setCompleted] = useState(false)
  const [count , setCount] = useState(0)

  data.forEach(element => {

      if(element.Completed === true) return setCount(count => count + 1);
      else return count
  });

  const now = moment()

  const formattedDate = now.format('ddd DD MMM');

  const handleDelete = (id)=>{
    setData(data.filter((item)=>(item.id !== id)))
  }

  // const handleCheckbox = (id)=>{
  //     if(data.filter(item => item.id == id)){
          
  //     }

     
  //     console.log(newData)
  // }

  return (
    <div className='col-span-1 bg-slate-50 '>

       {/* LeftSide header */}
        <div className='flex p-2 items-center text-blue-800 justify-between bg-yellow-50'>
            <h1 className='font-bold text-xl'>{formattedDate}</h1>
            <span className='flex text-center items-center gap-2 justify-center'> <span className=' text-white font-bold bg-teal-400  w-[35px] rounded-full flex justify-center items-center h-[35px] '>{count}/{dataLength}</span> Completed</span>
        </div>

        {/* list */}
        <div className=''> 
            {data.map((item)=>(
                 <div key={item.id} className='flex justify-between p-2 bg-blue-50 hover:bg-blue-100 tracking-widest'>
                    
                    <div className='flex gap-2'>
                        <input 
                        checked={item.Completed}
                        type="checkbox"
                        // onChange={()=> handleCheckbox(item.id)} 
                        />
                        <h2>{item.task}</h2>

                    </div>
                    <button className="w-[24px] h-[28px] text-center text-white font-semibold bg-red-500 hover:bg-red-600 "
                            onClick={()=>{
                               handleDelete(item.id)
                            }}
                    >
                      X</button>
                    
                 
             </div>
            ))}
        </div>
    </div>
  )
}
