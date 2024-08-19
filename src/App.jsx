import React from 'react'
import ContainerBox from './ContainerBox'

export default function App() {
  const data = "hello world"
  return (
    <div className='bg-yellow-100 w-full min-h-screen flex justify-center items-center'>
        <ContainerBox data={data}/>
    </div>
  )
}
