import React from 'react'
import Header from "./components/Header"
import FormCooking from './components/FormCooking'
import CookingList from './components/CookingList'

const App = () => {
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div>
        <CookingList/>
      </div>
    </div>
  )
}

export default App