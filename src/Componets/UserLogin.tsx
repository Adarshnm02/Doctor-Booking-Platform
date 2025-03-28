import { Button } from '@heroui/button'
import React from 'react'

const UserLogin: React.FC = () => {
  return (
    
    <div className='min-h-screen flex justify-center items-center p-4 '>
        <div className='text-center bg-gray-100 p-48 shadow-2xl'>
            <div className='space-y-1'>
            <h1 className='text-2xl font-bold text-center'>Welcome Back</h1>
            </div>
            <div className='bg-yellow-400'>
            <p>Welcome</p>
            </div>
            <p>Email</p>
            <Button className='bg-gray-500 rounded-full text-white'>Password</Button>
        </div>
    </div>
  
  )
}

export default UserLogin
