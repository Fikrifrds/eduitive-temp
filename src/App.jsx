import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Contact me</p>
      <a href='mailto:qloladigital@gmail.com'>qloladigital@gmail.com</a>
    </div>
  )
}

export default App
