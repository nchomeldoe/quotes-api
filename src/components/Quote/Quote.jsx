const Quote = ({ quote, id }) => {
  console.log("quote", quote);
  console.log("id", id);

  return (
    <>
      <p>{id}</p>
      <p>{quote}</p>
    </>
  );
};

export default Quote;
