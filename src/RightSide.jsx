import React from 'react'

export default function RightSide() {
  return (
    <div className='col-span-1 bg-slate-50 h-full relative text-left p-3'>
        <h1 className=' tracking-wider text-2xl font-semibold mb-3 '>Add a Todo</h1>
        <form action="">
            <input type="text" className='border-2 w-4/5 h-9 mr-4'/>
            <button className='btn' >Add</button>
        </form>

        <div className='absolute bottom-2 flex flex-col left-1/3 translate-x-1/2 '>
            <button className='btn'>Login</button>
            <button className='btn my-3'>SignUp</button>
        </div>
    </div>
  )
}
