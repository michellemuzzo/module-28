import { Routes, Route, Link } from "react-router-dom"; // Link is now included
import './App.css';

// Import components for different routes
import Red from './components/red.jsx';
import Blue from './components/blue.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue" className="blue">Blue</Link>
        <Link to="/red" className="red">Red</Link>
        <Link to="/" className="home-link">Home</Link> {/* New link for Home */}
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



