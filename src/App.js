import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Photography from "./pages/Photography";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;