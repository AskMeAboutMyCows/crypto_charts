import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Featured from './components/Featured'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
