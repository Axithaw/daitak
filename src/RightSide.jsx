import React from 'react'

export default function RightSide(handleAddBtn) {
  return (
    <div className='col-span-1 bg-slate-50 h-full relative text-left p-3'>
        <h1 className=' tracking-wider text-2xl font-semibold mb-3 '>Add a Todo</h1>
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
          console.log("click add")
        }}>
            <input type="text" className='border-2 w-4/5 h-9 mr-4'/>
            <button className='btn'  >Add</button>
        </form>

        <div className='absolute bottom-2 flex flex-col w-full'>
            <button className='btn my-3 left-0 right-0 mx-auto w-[200px]'>Login</button>
            <button className='btn my-3 left-0 right-0 mx-auto w-[200px] '>SignUp</button>
        </div>
    </div>
  )
}
