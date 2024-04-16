import react from 'react'

import './App.css'
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Service from './components/Servicess/Service';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
