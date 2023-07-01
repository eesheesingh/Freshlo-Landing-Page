import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Steps from "./components/Steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
