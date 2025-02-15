import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div>
        <nav className="">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5 pt-7" />
          </svg>
        
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
          <NavLink to="/" className="rounded-md px-3 py-2 text-xl pt-7 font-medium text-white">Home</NavLink>
            <NavLink to="/" className="rounded-md px-3 py-2 text-xl font-medium text-white pt-7">Promotions</NavLink>
            <NavLink to="/" className="rounded-md px-3 py-2 text-xl font-medium text-white pt-7">Rooms</NavLink>
            <NavLink to="/" className="rounded-md px-3 py-2 text-xl font-medium text-white pt-7">Facilties</NavLink>
            <NavLink to="/" className="rounded-md px-3 py-2 text-xl font-medium text-white pt-7">Food & Beverages</NavLink>
            <NavLink to="/" className="rounded-md px-3 py-2 text-xl font-medium text-white pt-7" >More</NavLink>
          </div>
        </div>
      </div>
        <p className='text-lg text-white font-medium pt-7'>Login/Join</p>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 pt-7">
        <button type="button" className="relative  bg-yellow-700 pl-5 pr-5 px-2 py-2  text-white font-medium ">
          <span className="absolute -inset-1.5"></span>
          Book A Stay
         
        </button>

  
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
     
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">Home</NavLink>
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">Promotions</NavLink>
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">Rooms</NavLink>
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">Facilties</NavLink>
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">Food & Beverages</NavLink>
      <NavLink to="#" className="block   px-3 py-2 text-base font-medium text-white" aria-current="page">More</NavLink>
    </div>
  </div>
</nav>

    </div>
  )
}
