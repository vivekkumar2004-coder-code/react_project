import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
const App = () => {
  // localStorage.clear()

  return (
    <div className='bg-gray-800 w-screen text-white font-thin h-fit py-10 px-20 '>
      <Navbar/>
     <Mainroutes/>
     
    </div>
  )
}

export default App
