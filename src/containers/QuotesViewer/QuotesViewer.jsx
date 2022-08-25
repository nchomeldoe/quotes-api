import Quote from "../../components/Quote/Quote";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";

const QuotesViewer = () => {
  const [quotes, setQuotes] = useState([]);

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

  return (
    <>
      <Button text="Get random quote" />
      <Button text="Get all quotes" />
      <div className="app">
        {quotes.length > 0 &&
          quotes.map((quote) => <Quote key={quote.id} quote={quote.quote} />)}
      </div>
    </>
  );
};

export default QuotesViewer;
