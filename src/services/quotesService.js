const getQuotes = async () => {
  try {
    const response = await fetch("http://localhost:8080/quotes");
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    const quotesData = await response.json();
    return quotesData;
  } catch (error) {
    return error.message;
  }
};

const getQuoteById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/random/${id}`);
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    const quoteById = await response.json();
    return quoteById;
  } catch (error) {
    return error.message;
  }
};

const getRandomQuote = async () => {
  try {
    const response = await fetch("http://localhost:8080/random");
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    const randomQuoteData = await response.json();
    return randomQuoteData;
  } catch (error) {
    return error.message;
  }
};

const postQuote = async (quote) => {
  try {
    const response = await fetch("http://localhost:8080/random", {
      method: "POST",
      body: JSON.stringify(quote),
    });
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    return "Quote successfully created";
  } catch (error) {
    return error.message;
  }
};

const deleteQuote = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/random/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }
    return "Quote successfully deleted";
  } catch (error) {
    return error.message;
  }
};
