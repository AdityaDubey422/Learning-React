import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Products from "./components/Products";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Products productCateogary="Wireless earphones" />
      <Footer />
    </>
  );
}

export default App;
