import Home from "../../components/Home";
import Popular from "../../components/Popular";
import Offers from "../../components/Offers";
import About from "../../components/About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <section id="popular">
        <Popular />
      </section>
      <Offers />
      <About />
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
