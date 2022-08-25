import Button from "../Button/Button";

const Quote = ({ quote, id }) => {
  console.log("quote", quote);
  console.log("id", id);

  return (
    <>
      <p>
        {quote} <Button text="Delete" />
      </p>
    </>
  );
};

export default Quote;
