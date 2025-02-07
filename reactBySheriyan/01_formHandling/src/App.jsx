import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };
  return (
    <>
      <div className="bg-zinc-800 h-screen w-screen text-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="bg-white border-2 text-black text-xl px-3 py-2 m-3"
            type="text"
            placeholder="Enter your name"
          />
          <br />
          <button
            className="bg-emerald-600 rounded text-2xl px-3 py-2 m-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
