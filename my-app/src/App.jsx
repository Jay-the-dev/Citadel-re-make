import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/header.jsx'
import Hero from './components/hero/hero.jsx'
import Stats from './components/statsStoryTelling/stats.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="flex mb-20 ml-[30%] text-start">
        <Stats num="1990" 
        text="Date founded by CEO Ken Griffin" />

        <Stats num="$66B"
         text="Investment capital as of June 1, 2025" 
         paragraph="Investment capital is combined across funds and includes equity (or members’ capital), plus any accrued performance allocation (or manager allocation) and the granted portion of certain deferred payment obligations (where applicable)." />

        <Stats num="#1" text="Most profitable hedge fund manager of all time" paragraph="Source: LCH Investments NV estimates, Great Money Managers by Net Gains since inception to 12/31/2024." />
      </section>
    </>
  )
};

export default App