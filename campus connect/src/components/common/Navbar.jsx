import { Link } from 'react-router-dom';
import { Menu, User, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-campus-primary">
              Campus<span className="text-gray-800">Connect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/dashboard" className="text-gray-600 hover:text-campus-primary">Dashboard</Link>
            <Link to="/events" className="text-gray-600 hover:text-campus-primary">Events</Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-campus-primary">Marketplace</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700"><Bell size={20}/></button>
            <button className="bg-campus-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;