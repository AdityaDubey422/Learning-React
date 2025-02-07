import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState(""); // Set initial value to an empty string

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) {
      str += "0123456789";
    }
    if (charactersAllowed) {
      str += "!@#$%^&*(){}[]";
    }
    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  return (
    <>
      <div className="h-screen w-screen bg-black text-white flex justify-center pt-20">
        <div className="bg-gray-800 min-w-1/3 p-4 rounded-2xl h-fit">
          <div className="flex">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state as user types
              className="bg-white text-black text-xl px-3 py-2 grow rounded-l-xl"
              type="text"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-400 px-3 py-1 rounded-r-xl active:scale-95 hover:bg-blue-500 transition"
              onClick={copyPassToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-3 mt-5 pl-1">
            <div className="flex items-center gap-1">
              <input
                type="range"
                min="1"
                value={length}
                max="100"
                className="slider"
                id="lengthRange"
                onChange={(e) => setLength(Number(e.target.value))} // Convert slider value to a number
              />
              <label htmlFor="lengthRange">Length ({length})</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={numbersAllowed}
                onChange={(e) => setNumbersAllowed(e.target.checked)}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="characters"
                id="characters"
                checked={charactersAllowed} // Bind checkbox to state
                onChange={(e) => setCharactersAllowed(e.target.checked)}
              />
              <label htmlFor="characters">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;