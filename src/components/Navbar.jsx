import React from 'react'

const Navbar = () => {
  return (
      <div className='flex items-center justify-between p-4'>
<h2 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h2>          

<div>
 <button className='text-white pr-4'>Sign in</button>
 <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign out</button>           
</div>



    </div>
  )
}

export default Navbar
