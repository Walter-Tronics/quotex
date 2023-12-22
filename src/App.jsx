import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



// This custom hook takes an array of quotes and returns a random quote
// It keeps track of the used quotes in a set and avoids repeating them
// If all the quotes are used, it returns null
function useRandomQuote(quotes) {

  
}


function App() {

  

  

  return (
    <>
      <section id="quoteContainer">
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
