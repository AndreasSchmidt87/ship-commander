import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ship Commander</h1>
      <nav>
        <Link to="/">User Profile</Link>
        <Link to="/ships">Available Ships</Link>
        <Link to="/market">Marketplace</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>User Profile</h2>} />
        <Route path="/ships" element={<h2>Available Ships</h2>} />
        <Route path="/market" element={<h2>Marketplace</h2>} />
      </Routes>
    </div>
  );
}

export default App;
