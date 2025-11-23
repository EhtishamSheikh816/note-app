import { useState } from "react";
import { FileText, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change for testing

  const [username, setUsername] = useState("John Doe");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteApp
            </span>
          </div>

          {/* Center Nav (Desktop) – shown only when logged out */}
          {!isLoggedIn && (
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
          )}

          {/* Center Username (Desktop) */}
          {isLoggedIn && (
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-800">{username}</span>
            </div>
          )}

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                  Login
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </a>

                <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors font-medium">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Username + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {isLoggedIn && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1.5 rounded-lg">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  {username}
                </span>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="space-y-2">
              {!isLoggedIn ? (
                <>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Contact
                  </a>

                  <div className="pt-2 space-y-2">
                    <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium">
                      Login
                    </button>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md">
                      Get Started
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <a
                    href="#"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </a>

                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// change

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Header = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fetch user from cookie (JWT)
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API}/auth/dashboard`, {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteApp
            </span>
          </div>

          {/* Center Greeting (Only For Logged-in Users) */}
          {user && (
            <div className="hidden sm:flex items-center space-x-2">
              <span className="animate-wave text-xl">👋</span>
              <span className="text-gray-800 font-medium">Hi, {user.name}</span>
            </div>
          )}

          {/* Desktop Menu (Not Logged-in) */}
          {!user && (
            <nav className="hidden md:flex items-center gap-8">
              {["About", "Features", "Pricing", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-purple-600 transition font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
          )}

          {/* Right Side Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow"
                >
                  Dashboard
                </Link>

                <button
                  onClick={onLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition shadow"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden block text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white/90 backdrop-blur-md shadow-md">
          {user ? (
            <>
              {/* Centered Greeting on Mobile */}
              <div className="flex flex-col items-center py-2 space-y-1 text-center">
                <span className="animate-wave text-xl">👋</span>
                <span className="text-gray-800 font-medium">
                  Hi, {user.name}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mt-3">
                <Link
                  to="/dashboard"
                  className="block w-full text-center px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={onLogout}
                  className="w-full px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Centered greeting for non-logged user */}
              <div className="flex flex-col items-center py-2 space-y-1 text-center">
                <span className="animate-wave text-xl">👋</span>
                <span className="text-gray-800 font-medium">Welcome!</span>
              </div>

              {/* Menu Links */}
              <div className="space-y-2 mt-3">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-2 text-gray-700 hover:text-purple-600 transition font-medium text-center"
                  >
                    {item}
                  </a>
                ))}

                <Link
                  to="/login"
                  className="block text-center text-gray-700 hover:text-purple-600 py-2 font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold mt-2"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
