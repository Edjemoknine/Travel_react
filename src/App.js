import "./App.scss";
import Navbar from "./components/Nvabar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
}

export default App;
