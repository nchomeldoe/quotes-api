import "./App.css";
import QuotesCreator from "./containers/QuotesCreator/QuotesCreator";

import QuotesViewer from "./containers/QuotesViewer/QuotesViewer";

function App() {
  return (
    <>
      <h1>Quotes</h1>
      <QuotesViewer />
      <QuotesCreator />
    </>
  );
}

export default App;
