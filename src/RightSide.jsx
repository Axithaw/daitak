import React from 'react'
import { useRef,useState } from 'react';


export default function RightSide({data,setData,nextId, setNextId}) {
  const inputValue = useRef(null)
  return (
    <div className='col-span-1 bg-slate-50 h-full relative text-left p-3'>
        <h1 className=' tracking-wider text-2xl font-semibold mb-3 '>Add a Todo</h1>


        <form action="" 
        onSubmit={(e)=>{
            e.preventDefault();
            console.log(inputValue.current.value)

            
            if(inputValue.current.value !== '')  setData(currentdata=>[...currentdata, 
              { id: crypto.randomUUID(), task: inputValue.current.value, completed: false }
            ]);
            // setNextId(nextId => nextId + 1)
            inputValue.current.value = ''

         
        }}>
            <input ref={inputValue}  type="text" className='border-2 w-4/5 h-9 mr-4 p-2'/>
            <button className='btn'  >Add</button>
        </form>

        <div className='absolute bottom-2 flex flex-col w-full'>
            <button className='btn my-3 left-0 right-0 mx-auto w-[200px]'>Login</button>
            <button className='btn my-3 left-0 right-0 mx-auto w-[200px] '>SignUp</button>
        </div>
    </div>
  )
}
