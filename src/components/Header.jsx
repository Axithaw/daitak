import React from 'react'
import moment from 'moment'

const now = moment()

const formattedDate = now.format('YYYY-MM-DD');
export default function Header({value, countChecked}) {
  return (
    <div className='flex p-2 items-center text-blue-800 justify-between bg-yellow-50'>
            <h1 className='font-bold text-xl'>{formattedDate}</h1>
            <span className='flex text-center items-center gap-2 justify-center'> <span className=' text-white font-bold bg-teal-400  w-[35px] rounded-full flex justify-center items-center h-[35px] '>{value.length}/{countChecked.length}</span> Completed</span>
        </div>
  )
}
