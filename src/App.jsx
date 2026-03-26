
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Players from './components/Homepage/Players/Players'
import Navbar from './components/Navbar/Navbar'

const playerPromise = fetch('playersData.json').then(res => res.json());


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className='flex justify-center'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App
