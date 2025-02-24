import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </Router>
  );
}

export default App;




