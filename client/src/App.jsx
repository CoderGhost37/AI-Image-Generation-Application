import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain' />
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-purple-500 text-white py-2 px-4 rounded-md'>Create</Link>
      </header>
      <main className='sm:px-8 px-4 py-8 w-full bg-slate-100 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App