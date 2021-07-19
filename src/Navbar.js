import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar sticky">
      <header class="text-gray-600 body-font shadow-2xl">

        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >

          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
            <img src="https://yt3.ggpht.com/KNE0iyRwbW3qM1Dg74krP8vN8b810jxgJ-7188eRU3BKk3RuTgc1CZg3phAHr7XwQD5HMqVMYg=s600-c-k-c0x00ffffff-no-rj-rp-mo" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-20 h-20 text-white p-2  rounded-full" viewBox="0 0 24 24" />

            <Link to="/">
              <span class="ml-3 text-xl" >Rise-The-Tech</span>
            </Link>
          </a>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" >
            <Link to="/">
              <a class="mr-5 hover:text-gray-900"  >Home</a>
            </Link>
            <Link to="Courses">
              <a class="mr-5 hover:text-gray-900" >Courses</a>
            </Link>
            <Link to="/Sub">
              <a class="mr-5 hover:text-gray-900" >Subscribe</a>
            </Link>
            <Link to="/Contact">
              <a class="mr-5 hover:text-gray-900" >Contact me</a>
            </Link>
          </nav>


        </div>
      </header>

    </div>
  )
}

export default Navbar
