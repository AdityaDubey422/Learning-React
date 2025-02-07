import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  // let count = 0;
  const increaseValue = () => {
    if (count < 20) {
      setCount(++count);
      setCount(++count);
      setCount(++count);
      setCount(++count);
      setCount(++count);
    }
  };
  const decreaseValue = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  return (
    <>
      <div className="grid place-content-center h-screen text-center bg-zinc-900 text-white">
        <h1 className="text-5xl m-3">Learning React</h1>
        <h2 className="text-3xl">Counter value: {count}</h2>
        <div className="flex justify-center p-5">
          <button
            className="bg-pink-600 mr-5 p-2 rounded-sm text-l hover:bg-pink-700"
            onClick={increaseValue}
          >
            Increase
          </button>
          <button
            className="bg-pink-600 mr-5 p-2 rounded-sm text-l hover:bg-pink-700"
            onClick={decreaseValue}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;