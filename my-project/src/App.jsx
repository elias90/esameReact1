import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CercaStudenti from './ES1/cercaStudenti'

function App() {

  return (
    <>
      <section className='flex flex-col items-center'>
        <div className='flex flex-col gap-5 p-10 container w-[800px]'>
          <h1 className='text-4xl'>Studenti</h1>
          <CercaStudenti />
        </div>
      </section>
    </>
  )
}

export default App
