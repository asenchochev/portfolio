import React from 'react'
import './App.css'
import Sideber from './components/sidebar/Sideber'
import Portfolio from './components/portfolio/Portfolio'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'

const App = () => {
  return (
    <div>
      <Sideber />
      <main className=''>
        <Home />
        <About />
        <Resume />
        <Services />
        <Testimonials />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
