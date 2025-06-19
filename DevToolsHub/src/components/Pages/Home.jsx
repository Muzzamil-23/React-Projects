import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container px-20 mx-auto flex flex-col justify-center items-center flex-1 h-[100%] text-black dark:text-white dark:bg-gray-800'>
      {/* hero section */}

      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-6xl font-bold'>Welcome to <span className='text-blue-500'>DevToolsHub</span></h1>
        <h3 className='text-3xl font-medium'>Your personal collection of essential development tools</h3>
        <p className='text-2xl max-w-[1024px] text-center mt-10'>DevToolshub is a curated collection of tools used by developers to boost productivity, debug faster, test more efficiently, and build better software.</p>
      </div>

      {/* cta section */}

      <div className='mt-20'>
        <Link to='/tools' className='px-6 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 text-xl'>Browse Tools</Link>
      </div>
    </div>

  )
}

export default Home