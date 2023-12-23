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

  // Initialize a state to store the current quote
  const [currentQuote, setCurrentQuote] = useState({});

  // Use the custom hook to get a random quote
  const getRandomQuote = useRandomQuote(quotes);



  //Function to fetch the quotes
  async function fetchQuotes() {
    //fetch quotes from quotex API
    const response = await axios.get("https://quotex-api.onrender.com/quotes");
      const data = response.data;

      // Set the quotes state
      setQuotes(data);
      console.log(data);
  }

  

  // Fetch the quotes from  the quotex API once when the component mounts
  useEffect(()=> {
    //call the fetch quotes function
    fetchQuotes();
  }, []);


  //function to get  a random quote
  function handleGetQuote(){
     // Get a random quote from the quotes array
     const quote = getRandomQuote();

     // Set the current quote state
     setCurrentQuote(quote);
     console.log(quote);
  }


  // Update the current quote state when the quotes state changes
  useEffect(() => {

    //get a  random quote when the component unmounts
    return () => {
      handleGetQuote();
    }
  }, [quotes]);
  

  return Object.keys(quotes).length > 0 ? (
    <>
      {
        //If  any quote still exits, display a quote
        currentQuote ? (

          <section id="quoteContainer">
            <h1>Random Quote</h1>

            {/* Quote content */}
            <blockquote id='quote'>
              
            </blockquote>

            {/* Author of the quote */}
            <div id='author'>
              
            </div>

            {/* Query for quote */}
            <button onClick={handleGetQuote}>Get Quote</button>

            {/* Acknowledgement  */}
            <h5>Quotes acquired from <a href="https://www.goodreads.com/quotes/tag/inspirational">Goodreads</a></h5>
          </section>
        
        ) : (
          <p>No more quotes available</p>
        )
      }
    </>
  ) : 'Loading...'
}

export default App
