import "./App.css";
import { useState, useEffect } from "react";
import Quote from "./components/Quote/Quote.jsx";

console.log(Quote);

function App() {
  const [quotes, setQuotes] = useState([]);
  console.log("quotes", quotes);

  const getQuotes = async () => {
    try {
      let response = await fetch("http://localhost:8080/quotes");
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      let quotesData = await response.json();
      console.log("data", quotesData);
      setQuotes(quotesData);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <h1>Test</h1>
      <div className="app">
        {quotes.length > 0 &&
          quotes.map((quote) => {
            console.log("q", quote);
            // <h2>{quote.quote}</h2>;
            <Quote key={quote.id} quote={quote.quote} id={quote.id} />;
          })}
      </div>
    </>
  );
}

export default App;
