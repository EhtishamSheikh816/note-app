import { useEffect, useState } from "react";
import { FileText, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Header = ({ onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user from JWT cookie
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

  const isLoggedIn = !!user;
  const username = user?.name || "";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NoteApp
            </span>
          </div>

          {/* Center Nav (Desktop) – Logged OUT */}
          {!isLoggedIn && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>
          )}

          {/* Center Username (Desktop) – Logged IN */}
          {isLoggedIn && (
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-1 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center py-2 space-x-1 text-center">
                <span className="animate-wave text-xl">👋</span>
                <span className="text-gray-800 font-medium">Welcome!</span>
              </div>
              <span className="font-semibold text-gray-800">{username}</span>
            </div>
          )}

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center text-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>

                <button
                  onClick={onLogout}
                  className="flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 transition-colors font-medium"
                >
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
          <div className="md:hidden py-4 border-t border-gray-100 absolute left-0 top-16 w-full bg-white shadow-lg z-50 px-4">
            <nav className="space-y-2 ">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/features"
                    className="block px-4 py-2 text-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Features
                  </Link>
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 text-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    Contact
                  </Link>

                  <div className="pt-2 space-y-2">
                    <Link
                      to="/login"
                      className="w-full block text-center px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                    >
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      className="w-full block bg-gradient-to-r text-center from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>

                  <button
                    onClick={onLogout}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                  >
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
};

export default Header;
