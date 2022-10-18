import React from 'react'
import './App.css'
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='content'></div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
