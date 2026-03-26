
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players'
import Navbar from './components/Navbar/Navbar'

const playerPromise = fetch('playersData.json').then(res => res.json());



function App() {
  const [coin, setCoin] = useState(100000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className='flex justify-center'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  );
}

export default App
