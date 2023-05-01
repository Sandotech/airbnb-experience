import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  const date = new Date();
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <h1>It is currently about {date.getHours()}!</h1>
      <Card />
    </>
  )
}

export default App
