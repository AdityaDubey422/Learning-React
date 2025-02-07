import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-black");

  const bgChange = (e) => {
    e.target.className.split(" ").forEach((tailwindProperty) => {
      if (tailwindProperty.startsWith("bg")) {
        setBgColor(tailwindProperty);
      }
    });
  };

  return (
    <>
      <div className={bgColor}>
        <div className="h-screen w-screen text-white flex items-end justify-center p-15 ">
          <div className="bg-white flex gap-3 justify-center py-2 px-3 rounded-full">
            <button
              className="bg-red-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Red
            </button>
            <button
              className="bg-blue-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Blue
            </button>
            <button
              className="bg-green-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Green
            </button>
            <button
              className="bg-green-900 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Olive
            </button>
            <button
              className="bg-gray-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Gray
            </button>
            <button
              className="bg-yellow-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Yellow
            </button>
            <button
              className="bg-pink-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Pink
            </button>
            <button
              className="bg-purple-500 px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Purple
            </button>
            <button
              className="bg-violet-300 px-4 py-1 rounded-full "
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Lavender
            </button>
            <button
              className="bg-white px-4 py-1 rounded-full text-black shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              White
            </button>
            <button
              className="bg-black px-4 py-1 rounded-full"
              onClick={(e) => {
                bgChange(e);
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;