import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider />
      <Footer />
    </>
  );
};

export default App;
