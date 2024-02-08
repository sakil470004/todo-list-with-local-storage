import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AddTodo from './components/Todo/AddTodo'

function App() {

  return (
    <div data-theme="light" className=' h-screen'>
      <Navbar/>
      <AddTodo/>
    </div>
  )
}

export default App
