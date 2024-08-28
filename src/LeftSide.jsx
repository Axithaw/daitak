import React, { useState } from 'react'
import moment from 'moment'

export default function LeftSide({data,setData}) {

  const dataLength = data.length;

  
  const [count , setCount] = useState(0)

  // data.map(item => {

  //     if(item.completed === true) return setCount(prevcount => prevcount + 1);
  //    return count
  // });


  //time format

  const now = moment()

  const formattedDate = now.format('YYYY-MM-DD');

  const handleDelete = (id)=>{
    setData(data.filter((item)=>(item.id !== id)))
  }


//togglecheckbox
  const handleCheckbox = (id, completed)=>{

    setData(prevData => {
     return prevData.map(
        item =>   item.id === id?
        {...item, completed ,id}: item
      )
   
     
    }
   
  )  
 data.map(item => item.completed === true ? setCount(count => count + 1): count)
  
}

// const clickCompleted =(id) =>{
//   setData(prevData => 
//     prevData.map(item => item.id === id? {...item, Completed: !item.Completed}: item)
//   )
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
                 <li key={item.id} 
                    // onClick={()=>clickCompleted(item.id)}
                    className={item.completed === true ? `list bg-green-100 hover:bg-green-200`: `list bg-blue-100 hover:bg-blue-200 `}>
                    
                    <div className='flex gap-2'>

                      {/** Unsuccessful checkbox */}

                        <input 
                            
                            type="checkbox"
                            checked={item.completed}
                            onChange={(e)=> handleCheckbox(item.id, e.target.checked)} 
                        />


                        <h2>{item.task}</h2>

                    </div>
                    <button className="w-[24px] h-[28px] text-center text-white font-semibold bg-red-500 hover:bg-red-600 "
                            onClick={()=>{
                               handleDelete(item.id)
                            }}
                    >
                      X</button>
                    
                 
             </li>
            ))}
        </div>
    </div>
  )
}
