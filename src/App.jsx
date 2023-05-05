import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

function App() {
  const Cards = Data.map(item => 
      <Card
        key = {item.id}
        {...item}
      />
    )
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>{Cards}</section>
    </>
  )
}

export default App
