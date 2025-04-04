import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
