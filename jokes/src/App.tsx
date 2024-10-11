import { useState } from "react";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
