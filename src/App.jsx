import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    count < 10 ? setCount(count + 1) : setCount("Done !");
  };

  const handleMinus = () => {
    count == 0 ? setCount("Done !") : setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="App">
        <Button handler={handleMinus}>-</Button>
        <h1>{count}</h1>
        <Button handler={handlePlus}>+</Button>
      </div>
      <Button handler={handleReset} disabled={count == "Done !" ? false : true}>
        Reset
      </Button>
    </>
  );
}

export default App;
