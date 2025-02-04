import { useState } from "react";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);
  const myObj = {
    username: "aditya",
    age: 21,
  };
  let newArr = [1, 2, 3, 4];

  return (
    <>
      <div className="bg-zinc-700">
        <p className="text-3xl text-white p-5 text-center">
          Hello this is taiwlind CSS
        </p>
        <div className="flex gap-8 justify-start min-h-screen p-3 px-7">
          <Card productName="Oppo enco buds" productPrice="$9" />
          <Card
            productName="Apple AirPods"
            productPrice="$90.9"
            productDescription="With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case."
          />
        </div>
      </div>
    </>
  );
}

export default App;
