// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Section from './Components/Section'
import FAQ from './Components/FAQ'
import Help from './Components/Help'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <LandingPage /> 
      <Section />
      <FAQ />
      <Help/>
      <Footer />
    </div>
  )
}

export default App