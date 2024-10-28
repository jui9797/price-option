

import './App.css'
import Chart from './components/Chart'
import CostomizeNav from './components/CostomizeNav'
import Navbar from './components/Navbar'
import PriceOptions from './components/PriceOptions'

function App() {
 

  return (
    <>
    {/* costomize nav */}
    <CostomizeNav></CostomizeNav>
     
      <h1 className='text-3xl bg-pink-500 '>Vite + React</h1>
       {/* daisy navbar */}
       <Navbar></Navbar>

       {/* price option */}
      <PriceOptions></PriceOptions>
      <br />
      <Chart></Chart>
      
    </>
  )
}

export default App
