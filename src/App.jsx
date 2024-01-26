import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Section1 from './assets/components/Section1'
import Section2 from './assets/components/Section2'
import Section3 from './assets/components/Section3'
import Section4 from './assets/components/Section4'
import Footer from './assets/components/Footer'
import Top from './assets/components/Top'
import Preloader from './assets/components/Preloader'

function App() {

  return (
    <>
      <Preloader/>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <Top/>
    </>
  )
}

export default App
