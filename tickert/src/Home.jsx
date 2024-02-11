import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className='font-bold text-xl text-center my-4'>Suggested Movies </h2>
      <div className='sm:ml-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      </div>
    </div>
  );
}

export default Home;
