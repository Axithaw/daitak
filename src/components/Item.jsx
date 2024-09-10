
import React from 'react'

export default function Item( {item , handleCheckbox , handleDelete} ) {
  return (
    <li 
                    onClick={(e)=> handleCheckbox(item.id, e.target.checked)} 
                    // onClick={()=>clickCompleted(item.id)}
                    className={item.completed === true ? `list bg-green-100 hover:bg-green-200 cursor-pointer`: `list bg-blue-100 hover:bg-blue-200 cursor-pointer `}>
                    
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
  )
}
