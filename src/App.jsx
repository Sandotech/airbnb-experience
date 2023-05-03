import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Card from './components/Card';
import * as images from './assets/index';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card 
        img = {`${images.katie}`}
        rating = '5.0'
        reviewCount = {6}
        country = 'USA'
        title = 'Life lessons with Katie Zaferes'
        price = {136}
      />
    </>
  )
}

export default App
