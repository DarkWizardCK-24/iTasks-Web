import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around bg-indigo-500 text-white py-3 md:mx-auto'>
        <div className="logo">
            <span className='font-bold text-3xl mx-5'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-6'>
            <li className='text-xl cursor-pointer hover:font-bold transition-all duration-3000'>Home</li>
            <li className='text-xl cursor-pointer hover:font-bold transition-all duration-3000'>About</li>
            <li className='text-xl cursor-pointer hover:font-bold transition-all duration-3000'>Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
