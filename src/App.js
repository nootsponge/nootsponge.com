import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Commissions from "./components/Commissions";

function App() {
  return (
    <Router>
      <div className="app h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
