import Button from "../../components/Button/Button";

const QuotesCreator = () => {
  return (
    <div>
      <label htmlFor="new-quote">Create a new quote:</label>
      <input type="text" id="new-quote" name="new-quote" />
      <Button text="Add quote" />
    </div>
  );
};

export default QuotesCreator;
