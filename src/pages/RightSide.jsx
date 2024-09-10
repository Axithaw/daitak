import React from 'react'
import Footer from '../components/Footer';
import { useRef,useState } from 'react';


export default function RightSide({data,setData}) {
  const inputValue = useRef(null)

  const submit = ()=>{
    let currentValue =  inputValue.current.value
    if(currentValue !== '' ) {
          setData(currentdata=>{ 
            return [...currentdata, 
              { id: crypto.randomUUID(), task: inputValue.current.value, completed: false }
            ]
          })
    } 
   currentValue = ''
   console.log(currentValue)
  }
  return (
    <div className='col-span-1 bg-slate-50 h-full relative text-left p-3'>
        <h1 className=' tracking-wider text-2xl font-semibold mb-3 '>Add a Todo</h1>


        <form action="" 
              onSubmit={(e)=>{
                e.preventDefault();
                submit()
            // setNextId(nextId => nextId + 1)
          console.log(data)
         
        }}>
            <input ref={inputValue}  type="text" className='border-2 w-4/5 h-9 mr-4 p-2'/>
            <button className='btn'  >Add</button>
        </form>

        <Footer/>
    </div>
  )
}
