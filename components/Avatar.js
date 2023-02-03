import React from 'react'
import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export const AvatarIcon = () => {
  const [ShowDropdown, setShowDropdown] = useState(false)
  return (
    <div className='flex-none h-full w-auto'>
      <div className='relative'>
        <button onClick={() => setShowDropdown(!ShowDropdown)} className='flex focus:outline-none bg-gray-100 dark:bg-light rounded-full h-auto py-1 px-1 w-auto items-center'>
          <img src={'https://lh3.googleusercontent.com/a/AEdFTp7pvJ8QlLi9q9I_lHMylrsWyDuaZODMG6i2hKdH=s83-c-mo'} className='rounded-full h-6 w-6 mr-2'></img>
          <p className='text-gray-900 dark:text-white font-semibold text-xs mr-2'>Raghav</p>
          {ShowDropdown ? <MdKeyboardArrowUp className='text-gray-900 dark:text-white'/> : <MdKeyboardArrowDown className='text-gray-900 dark:text-white'/>}
        </button>

        {ShowDropdown && 
          <div onClick={() => setShowDropdown(false)} className="absolute bg-gray-100 dark:bg-light w-full rounded mt-1">
            <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100'>Account</button>
            <button onClick={() => setShowDropdown(false)} className='focus:outline-none w-full text-sm py-2 hover text-gray-900 dark:text-white opacity-75 hover:opacity-100'>Log Out</button>
          </div>
        }
      </div>
    </div>
  )
}