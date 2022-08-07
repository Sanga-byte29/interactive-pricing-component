import React from 'react';
import {ReactComponent as CirclesPattern} from "./assets/images/pattern-circles.svg"
import PriceCard from './components/PriceCard';

import './App.css';
import ToggleMode from './components/ToggleMode';

function App() {
  return (
    <>
    <div className="bg-light-very-pale-blue h-screen border border-red w-full grid place-items-center relative font-sans p-4 dark:bg-gray-900">
      <div className="z-10">
        <div className="absolute h-[50vh] top-0 left-0 right-0 bg-light-grayish-slider dark:bg-dark-desaturated-blue rounded-bl-[10vw]" />
        <CirclesPattern className=" absolute top-8 right-0 left-0 m-auto" />
        <div className="z-10 absolute left-0 right-0 text-center text-sans text-grayish-blue tracking-wide top-16 flex flex-col gap-4">
          <h1 className="text-xl font-bold text-dark-desaturated-blue tracking-wide dark:text-white">
            Simple, traffic-based pricing
          </h1>
          <div className="px-[70px] sm:px-0 dark:text-white">
            <p className="text-sm">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <PriceCard />
     {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:bg-gray-400 dark:text-white"> */}
      <ToggleMode />
     {/* </button> */}

    </div>
    
    </>
  );
}

export default App;
