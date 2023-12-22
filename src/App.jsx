import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



// This custom hook takes an array of quotes and returns a random quote
// It keeps track of the used quotes in a set and avoids repeating them
// If all the quotes are used, it returns null
function useRandomQuote(quotes) {
  // Initialize a state to store the used quotes
  const [used, setUsed] = useState(new Set());

  // Define a helper function to get a random index from the array
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  // Return a function that returns a random quote
  return function () {
    // If the set size is equal to the array length, all the quotes are used
    if (used.size === quotes.length) {
      return null;
    }

    // Get a random index from the array
    let index = getRandomIndex(quotes);

    // If the index is already in the set, try another one
    while (used.has(index)) {
      index = getRandomIndex(quotes);
    }

    // Add the index to the set
    setUsed(prev  => new Set(prev).add(index));

    // Return the quote at the index
    return quotes[index];
  };
}


function App() {
  // Initialize a state to store the quotes
  const [quotes, setQuotes] = useState([]);
  

  

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
