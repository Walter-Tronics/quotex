import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <section>
        <h1>Random Quote</h1>

        {/* Quote content */}
        <blockquote id='quote'>

        </blockquote>

        {/* Author of the quote */}
        <div id='author'>

        </div>

        {/* Query for quote */}
        <button>Get Quote</button>

        {/* Acknowledgement  */}
        <h5>Quotes acquired from <a href="https://www.goodreads.com/quotes/tag/inspirational">Goodreads</a></h5>
      </section>
    </>
  )
}

export default App
