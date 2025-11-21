import { FileQuestion, Home, Search, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const handleGoHome = () => {
    console.log("Navigate to home");
  };

  const handleSearch = () => {
    console.log("Open search");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          {/* Animated Icon */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center mx-auto">
              <FileQuestion
                className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <h1 className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              404
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
          </div>

          {/* Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Note Not Found
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Oops! The note you're looking for seems to have vanished into thin
            air. It might have been deleted or moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleGoHome}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              <Link to="/">Go to Home</Link>
            </button>
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all"
            >
              <Search className="w-5 h-5" />
              <span>Search Notes</span>
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
            <button
              onClick={handleGoBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
            <span className="hidden sm:inline text-gray-300">|</span>
            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Page</span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Need help?{" "}
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
            <div className="text-sm text-gray-600">Active Notes</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Users</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-pink-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
