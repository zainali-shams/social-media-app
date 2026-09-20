import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Navbar from './pages/Navbar'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/navbar' element={<Navbar />} />

      </Routes>
      <Navbar />
    </Router>
  )
}

export default App

