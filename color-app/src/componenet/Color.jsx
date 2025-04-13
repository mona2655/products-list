import React, { useState } from 'react'

function Color() {
    const[color, setColor]= useState('white')
    const [theme, setTheme]  = useState('light')
    
  return (
    
    <div className='flex flex-col justify-center items-center h-screen'>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Btn</button>
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} `}>
        <div  style={{background: color}}className=' w-[220px] h-[220px] rounded-lg shadow-lg text-center border-2 mb-4'>
        <p className="mt-20 font-semibold text-white">{color.toUpperCase()}</p>
        
        </div>
        <div className='space-x-6'>
            <button onClick={()=>setColor('red')} className='bg-red-600 px-4 rounded hover:bg-red-700 transition'>RED</button>
            <button onClick={()=>setColor('blue')} className='bg-blue-600 px-4 rounded'>BLUE</button>
            <button onClick={()=>setColor('green')} className='bg-green-600 px-4 rounded'>GREEN</button>
            
            
        </div>
          <button onClick={() => setColor('white')} className='mt-3 bg-amber-700 px-4'>Reset</button>
    </div>
    </div>
  )
}

export default Color