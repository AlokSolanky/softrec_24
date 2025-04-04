import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
