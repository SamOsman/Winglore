import React, { useState } from 'react'

//styles
import './App.css';

//components
import Header from './header';
import Footer from './footer';
import BirdSquare from './birdsquare';

//images
import birdheader from '../src/img/redwing.jpg'

//data
import { birddata } from './mockdata';

function App() {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className='bg-primary-orange'>
        <Header></Header>
      </div>

      <main className='container my-20'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-primary-orange  pt-12 font-serif text-4xl lg:text-6xl'>
            Learn about your favourite<br /> North American birds</h1>
          <img src={birdheader} className="max-w-[100px] rounded-lg object-contain solidboxshadow md:max-w-[250px] xl:max-w-[500px]" />
        </div>
      </main>

      <div>
        <div className='bg-secondary-yellow/50'>
          <h2 className='container py-20 text-lg'>Use this website to learn about your favourite bird! <br />You can go through the entire list below or filter based on a common name of a bird.</h2>
        </div>
        <div className='container'>
          <input type="text" id="name" name="name" placeholder='Search for a bird by common name'
            onChange={(e) => setSearch(e.target.value)}
            className='bg-primary-orange/30  border rounded min-w-[500px] my-10 py-4 px-2' ></input>


          {birddata.filter((bird) => {
            return search.toLowerCase() === '' ? bird : bird.name.toLowerCase().includes(search)
          }).map((bird) => (
            <BirdSquare birddata={bird} key={bird.id}></BirdSquare>
          ))}

        </div>
      </div>

      <div className='bg-primary-orange'>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
