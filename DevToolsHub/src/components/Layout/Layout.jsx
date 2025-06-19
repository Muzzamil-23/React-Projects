import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <main className='flex-1 bg-white dark:bg-gray-800'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout