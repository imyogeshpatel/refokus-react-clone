import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
const App = () => {
  return (
    <>
      
      <div className="w-full bg-zinc-900 text-white" >
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
      </div>
    </>
  )
}

export default App