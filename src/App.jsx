import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Popular from "./components/Popular";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Footer />
    </div>
  );
};

export default App;
