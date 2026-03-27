import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// Placeholder components for other pages
const Events = () => <div className="pt-24 text-center">Events Page Coming Soon</div>;
const Marketplace = () => <div className="pt-24 text-center">Marketplace Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Navbar is visible on ALL pages */}
        <Navbar />
        
        {/* Routes define which component shows based on URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;