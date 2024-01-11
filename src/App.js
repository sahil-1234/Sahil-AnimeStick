import React from 'react'
import './app.css'
import Sidebar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'
const App = () => {

  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default App
